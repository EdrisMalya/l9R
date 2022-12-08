<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\PermissionGroup;
use App\Models\RolePermission;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PermissionsController extends Controller
{
    public function index(){
        return Inertia::render('UserManagement/Permissions/PermissionIndex', [
            'active' => 'permission',
            'permissions' => PermissionGroup::query()
                ->where('permission_group_id', 0)
                ->with('permissionGroup.permissions')
                ->with('permissions')
                ->get()
        ]);
    }
    public function store(Request $request){
        $data = $request->validate([
            'name' => ['required', function($field, $value, $error) use ($request){
                if(
                    PermissionGroup::query()
                        ->where('name', $value)
                        ->where('permission_group_id', $request->get('permission_group_id'))
                        ->exists()
                ) $error('This name already exists');
            }],
            'permission_group_id' => 'sometimes',
        ]);
        PermissionGroup::create($data);
        return back()->with(['message'=>'Group created successfully', 'close_modal' => true, 'type'=>'success']);
    }
    public function destroy($permissionGroup){
        $permissionGroup = PermissionGroup::query()->findOrFail($permissionGroup);
        if($permissionGroup->permissionGroup->count() > 0 || $permissionGroup->permissions->count() > 0){
            return back()->with(['message'=>'Group cannot be deleted because child groups exists', 'type'=>'error']);
        }
        $permissionGroup->delete();
        return back()->with(['message'=>'Group deleted successfully']);
    }

    public function update($permissionGroup, Request $request){
        $data = $request->validate([
            'name' => 'required',
        ]);
        PermissionGroup::findOrFail($permissionGroup)->update($data);
        return back()->with(['message'=>'Group updated successfully', 'close_modal' => true]);
    }

    public function savePermission(Request $request){
        $data = $request->validate([
            'name' => ['required', function($field, $value, $error) use ($request){
                if(
                    Permission::query()->where('name', $value)
                        ->where('permission_group_id', $request->get('permission_group_id'))
                        ->exists()
                ) $error('Name already exists');
            }],
            'permission_group_id' =>'required',
        ]);
        $data['key'] = Str::slug($data['name']);
        Permission::create($data);
        return back()->with(['message'=>'Permission created successfully', 'close_modal' => true]);
    }

    public function deletePermission(Permission $permission){

        if(RolePermission::query()->where('permission_id', $permission->id)->exists()){
            return back()->with(['message'=>'This permission cannot be deleted because its attached to some roles', 'type'=> 'error']);
        }else{
            $permission->delete();
            return back()->with(['message'=>'Permission created successfully', 'type' => 'success']);
        }
    }
}
