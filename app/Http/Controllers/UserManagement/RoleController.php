<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\RoleGroupResource;
use App\Http\Resources\RoleResource;
use App\Models\PermissionGroup;
use App\Models\Role;
use App\Models\RoleGroup;
use App\Models\RolePermission;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index(Request $request){
        $this->allowed('roles-access');
        return Inertia::render('UserManagement/Role/RoleIndex', [
            'active' => 'roles',
            'roles' => RoleGroupResource::collection(RoleGroup::with(['roles'=>function($query) use ($request){
                $role_ids = $request->user()->id == 1?'admin':\App\Models\User::with('roles.role')->findOrFail($request->user()->id)->roles->map(function($item){
                    return $item->role->id;
                });
                if ($request->user()->id == 1){
                    $query->withCount('assignedRoles');
                }else{
                    $query->withCount('assignedRoles')->whereNotIn('id',$role_ids);
                }
            }])->withCount('roles')->get())
        ]);
    }

    public function store(Request $request){
        $this->allowed('roles-create-role');
        $data = $request->validate([
            'name' => ['required', function($field, $value, $error) use($request) {
                if(Role::query()->where('name', $value)->where('role_group_id', $request->get('role_group_id'))->exists()){
                    $error('Name already exists');
                }
            }],
            'role_group_id' => ['required']
        ]);
        $data['created_by'] = auth()->id();
        Role::query()->create($data);
        return back()->with(['message'=>translate('Added successfully'), 'type'=>'success']);
    }

    public function show($lang, Role $role){
        $this->allowed('roles-view-role-details');
        return Inertia::render('UserManagement/Role/RoleDetails/RoleDetails', [
            'active' => 'roles',
            'permissions' => PermissionGroup::query()
                ->where('permission_group_id', 0)
                ->with('permissionGroup.permissions')
                ->with('permissions')
                ->get(),
            'role' => $role->load(['created_by', 'updated_by']),
            'assigned_permissions' => RolePermission::query()
                ->where('role_id', $role->id)
                ->pluck('permission_id')->map(fn ($item)=>(int)$item)
        ]);
    }

    public function update($lang, Role $role, Request $request){
        $this->allowed('roles-edit-role');
        $data = $request->validate([
            'name' => ['required', Rule::unique('roles')->ignore($role->id)],
        ]);
        $user_ids = UserRole::query()->where('role_id', $role->id)->pluck('user_id')->toArray();
        $data['updated_by'] = auth()->id();
        $assigned_permissions = $request->get('assigned_permissions');
        RolePermission::query()->where('role_id', $role->id)->delete();
        foreach ($assigned_permissions as $permission){
            RolePermission::create([
                'role_id' => $role->id,
                'permission_id' => $permission
            ]);
        }
        $role->update($data);
        foreach ($user_ids as $id){
            Cache::forget('permission_keys_'.$id);
        }
        return back()->with(['message'=>translate('Saved successfully'), 'type'=>'success']);
    }

    public function destroy($lang, Role $role){
        $this->allowed('roles-delete-role');
        if($role->permissions->count() > 0){
            return back()->with(['message'=>translate('Cannot be deleted because '.$role->count().' permission is attached to this role'), 'type'=>'error']);
        }else{
            $role->delete();
            return back()->with(['message'=>translate('Deleted successfully'), 'type'=>'success']);
        }
    }


    public function saveRoleGroup(Request $request){
        switch ($request->method()){
            case 'POST':
                $this->allowed('roles-create-role');
                $data = $request->validate([
                    'name' => 'required|unique:role_groups',
                ]);
                RoleGroup::query()->create($data);
                return back()->with(['message'=>translate('Added successfully'), 'type'=>'success']);
            case 'PUT':
                $this->allowed('roles-edit-role');
                $role_group = RoleGroup::query()->findOrFail($request->get('role_group_id'));
                $data = $request->validate([
                    'name' => ['required', Rule::unique('role_groups')->ignore($role_group->id)],
                ]);
                $role_group->update($data);
                return back()->with(['message'=>translate('Updated successfully'), 'type'=>'success']);
            case 'DELETE':
                $this->allowed('roles-delete-role');
                $role_group = RoleGroup::query()->findOrFail($request->get('role_group_id'));
                if($role_group->roles->count() > 0){
                    return back()->with(['message'=>translate('Cannot be deleted'), 'type'=>'error']);
                }else{
                    $role_group->delete();
                    return back()->with(['message'=>translate('Added successfully'), 'type'=>'success']);
                }
        }
    }
}
