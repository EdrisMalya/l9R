<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function created_by(){
        return $this->belongsTo(User::class, 'created_by', 'id');
    }
    public function updated_by(){
        return $this->belongsTo(User::class, 'updated_by', 'id');
    }

    public function permissions(){
        return $this->hasMany(RolePermission::class);
    }
    public function assignedRoles()
    {
        return $this->hasMany(RolePermission::class)->select('permission_id');
    }
}
