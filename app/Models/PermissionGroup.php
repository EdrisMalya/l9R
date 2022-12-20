<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

class PermissionGroup extends Model
{
    use HasFactory, LogsActivity, CausesActivity;

    protected $guarded = [];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty()
            ->logOnly(['*'])
            ->useLogName('Permission group')
            ->dontSubmitEmptyLogs()
            ->dontLogIfAttributesChangedOnly(['updated_at'])
            ;
    }

    public function permissionGroup()
    {
        return $this->hasMany(PermissionGroup::class)->with('permissionGroup.permissions');
    }

    public function permissions()
    {
        return $this->hasMany(Permission::class);
    }
}
