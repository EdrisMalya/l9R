<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $guarded = [];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'permissions'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'status' => 'boolean',
        'change_password' => 'boolean',
    ];

    public static function deleteUserImage($user){
        if(File::exists(public_path('storage/'.$user->image))){
            File::delete(public_path('storage/'.$user->image));
        }
        UserRole::where('user_id', $user->id)->delete();
    }

    public static function boot()
    {
        parent::boot();
        static::deleted(function($user){
            static::deleteUserImage($user);
        });
    }

    public function roles(){
        return $this->hasMany(UserRole::class)->with('role');
    }

    public static function getPermissionsAttribute()
    {
        /*if (auth()->user()->id == 1){
            return [];
        }else{
            $permissions = auth()->user()->load(['roles.role']);
            $permission_ids = [];
            foreach ($permissions->roles as $role){
                $permission_ids[] = $role->role->assignedRoles?->map(function($item) use($permission_ids){
                    return $item->permission_id;
                });
            }
            $ids = array();
            foreach ($permission_ids as $permission_id){
                foreach ($permission_id as $id){
                    if (!in_array($id, $ids)){
                        $ids[] = (int)$id;
                    }
                }
            }
            return Permission::whereIn('id',$ids)->select('key')->get()->map(function($item){
                return $item->key;
            });
        }*/

        /*Optimized by AI*/

        if (auth()->user()->id == 1) {
            return [];
        }

        $permissions = auth()->user()->load(['roles.role']);
        $permission_ids = $permissions->roles->pluck('role.assignedRoles')->flatten()->pluck('permission_id')->unique()->toArray();

        return Cache::remember('permission_keys_'.auth()->user()->id, 60*24*30, function() use ($permission_ids) {
            return Permission::whereIn('id', $permission_ids)->select('key')->get()->map(function($item) {
                return $item->key;
            });
        });
    }

    public static function isAllowed($permission, $abort=true)
    {
        $request = request();
        if ($request->user()->id == 1){
            return true;
        }
        $result = in_array($permission, static::getPermissionsAttribute()->toArray());
        if (!$result){
            if ($abort){
                abort(403);
            }else{
                return false;
            }
        }else{
            return true;
        }
    }
}
