<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

class Role extends Model
{
    use HasFactory, LogsActivity, CausesActivity;

    protected $guarded = [];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty()
            ->logOnly(['*'])
            ->useLogName('Role')
            ->dontSubmitEmptyLogs()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ;
    }

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
