<?php

namespace App\Models;

use App\Http\Controllers\Configurations\LanguageController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LanguageDictionary extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function language(){
        return $this->belongsTo(Language::class);
    }
}
