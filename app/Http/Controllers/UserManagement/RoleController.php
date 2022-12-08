<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\RoleGroupResource;
use App\Http\Resources\RoleResource;
use App\Models\PermissionGroup;
use App\Models\Role;
use App\Models\RoleGroup;
use App\Models\RolePermission;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index(){
        return Inertia::render('UserManagement/Role/RoleIndex', [
            'active' => 'roles',
            'roles' => RoleGroupResource::collection(RoleGroup::all())
        ]);
    }

    public function store(Request $request){
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
        return back()->with(['message'=>'Added successfully', 'type'=>'success']);
    }

    public function show(Role $role){
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

    public function update(Role $role, Request $request){
        $data = $request->validate([
            'name' => ['required', Rule::unique('roles')->ignore($role->id)],
        ]);
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
        return back()->with(['message'=>'Saved successfully', 'type'=>'success']);
    }

    public function destroy(Role $role){
        if($role->permissions->count() > 0){
            return back()->with(['message'=>'Cannot be deleted because '.$role->count().' permission is attached to this role', 'type'=>'error']);
        }else{
            $role->delete();
            return back()->with(['message'=>'Deleted successfully', 'type'=>'success']);
        }
    }


    public function saveRoleGroup(Request $request){
        switch ($request->method()){
            case 'POST':
                $data = $request->validate([
                    'name' => 'required|unique:role_groups',
                ]);
                RoleGroup::query()->create($data);
                return back()->with(['message'=>'Added successfully', 'type'=>'success']);
            case 'PUT':
                $role_group = RoleGroup::query()->findOrFail($request->get('role_group_id'));
                $data = $request->validate([
                    'name' => ['required', Rule::unique('role_groups')->ignore($role_group->id)],
                ]);
                $role_group->update($data);
                return back()->with(['message'=>'Updated successfully', 'type'=>'success']);
            case 'DELETE':
                $role_group = RoleGroup::query()->findOrFail($request->get('role_group_id'));
                if($role_group->roles->count() > 0){
                    return back()->with(['message'=>'Cannot be deleted', 'type'=>'error']);
                }else{
                    $role_group->delete();
                    return back()->with(['message'=>'Added successfully', 'type'=>'success']);
                }
        }
    }
}
