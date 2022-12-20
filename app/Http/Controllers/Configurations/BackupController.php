<?php

namespace App\Http\Controllers\Configurations;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class BackupController extends Controller
{
    public function index($lang, Request $request)
    {
        $this->allowed('backups-access');
        $backups = collect(File::allFiles(storage_path('app/backups')))->map(function($file){
            return [
                'file_name' => $file->getFileName(),
                'file_size' => $file->getSize()
            ];
        })->toArray();
        return Inertia::render('Configuration/Backup/BackupIndex', [
            'active' => 'backup',
            'backups' => $backups
        ]);
    }
}
