<?php

namespace App\Http\Controllers\UserManagement;

use App\Helpers\DatatableBuilder;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\LoginLog;
use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class UserController extends Controller
{
    public function index(Request $request){
        $this->allowed('users-access');
        $search_columns = ['name', 'email', 'phone_number'];
        $users = User::query()->with('roles')->where('id', '!=', auth()->id())->where('id', '!=', 1);
        $datatable = new DatatableBuilder($users, $request, $search_columns);
        return Inertia::render('UserManagement/Users/UserIndex', [
            'active' => 'users',
            'users' => $datatable->build(),
            'roles' => Role::all()
        ]);
    }

    public function show($lang, User $user, Request $request) {
        $this->allowed('users-view-profile');
        $active_tab = \request()->get('active_tab');

        $array = [
            'user' => $user,
            'active' => 'users',
            'active_tab' => $active_tab
        ];

        switch ($active_tab){
            case 'user_profile':
                break;
            case 'user_log_activities':
                $this->allowed('log-activity-access');
                $logs = Activity::query()->where('causer_id', $user->id);
                $datatable = new DatatableBuilder($logs, $request ,['description', 'subject_type', 'log_name']);
                $array['logs'] = $datatable->build();
                break;
            case 'user_login_log':
                $this->allowed('users-view-user-login-log');
                $login_logs = LoginLog::query()->where('email', $user->email);
                $datatable = new DatatableBuilder($login_logs, $request, ['ip_address', 'email']);
                $array['login_logs'] = $datatable->build();
                break;
            default:
                abort(404);
        }

        return Inertia::render('UserManagement/Users/UserDetails', $array);
    }

    public function store(UserRequest $request){
        $this->allowed('users-create-user');
        $data = $request->validated();
        $roles = collect($data['roles'])->map(fn($item)=>$item['value'])->toArray();
        unset($data['roles']);
        unset($data['confirm_password']);
        $request_image = $request->file('image');
        $data['password'] = Hash::make($data['password']);
        $data['change_password'] = true;
        $data['image'] = $request_image->store('users_picture', 'public');
        $user = User::query()->create($data);
        foreach ($roles as $role){
            UserRole::query()->create([
                'user_id' => $user->id,
                'role_id' => $role
            ]);
        }
        return back()->with(['message'=>translate('Successfully created'), 'type'=>'success']);
    }

    public function update($lang, UserRequest $request, User $user){
        $this->allowed('users-edit-user');
        $data = $request->validated();
        $roles = collect($data['roles'])->map(fn($item)=>$item['value'])->toArray();
        unset($data['roles']);
        unset($data['confirm_password']);
        if($data['password']!==null){
            $data['password'] = Hash::make($data['password']);
            $data['change_password'] = true;
        }else{
            $data['password'] = $user->password;
        }
        if($request->file('image')!==null){
            User::deleteUserImage($user);
            $data['image'] = $request->file('image')->store('users_picture','public');
        }else{
            $data['image'] = $user->image;
        }
        UserRole::where('user_id',$user->id)->delete();
        foreach ($roles as $role){
            UserRole::query()->create([
                'user_id' => $user->id,
                'role_id' => $role
            ]);
        }
        $user->update($data);
        return back()->with(['message'=>translate('Updated successfully'), 'type'=>'success']);
    }

    public function destroy($lang, User $user, Request $request){
        $this->allowed('users-delete-user');
        $user->delete();
        return back()->with(['message'=>translate('Successfully deleted'), 'type'=>'success']);
    }

    public function change_password(Request $request)
    {
        switch ($request->method()){
            case 'GET':
                return Inertia::render('UserManagement/ChangePassword');
            case 'POST':
                $data = $request->validate([
                    'old_password' => ['required', function ($filed, $value, $error){
                        if(!Hash::check($value, auth()->user()->password)) $error('Old password is incorrect');
                    }],
                    'new_password' => ['required', Password::min(8)->uncompromised()->mixedCase()->numbers()->symbols()],
                    'confirm_password' => ['required', 'same:new_password'],
                ]);
                auth()->user()->update([
                    'password' => Hash::make($data['new_password']),
                    'change_password' => false
                ]);
                return back()->with(['message' => translate('Your password has been changed successfully.'), 'type'=>'success']);
        }
    }

    public function deleteLogActivity($lang, Activity $activity){
        $this->allowed('log-activity-delete-log');
        $activity->delete();
        return back()->with(['message' => translate('Deleted successfully'), 'type'=>'success']);
    }
}
