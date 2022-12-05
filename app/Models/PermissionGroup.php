<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermissionGroup extends Model
{
    protected $guarded = [];
    use HasFactory;

    public function permissionGroup()
    {
        return $this->hasMany(PermissionGroup::class)->with('permissionGroup.permissions');
    }

    public function permissions()
    {
        return $this->hasMany(Permission::class);
    }
}
