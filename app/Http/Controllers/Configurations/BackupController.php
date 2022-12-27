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
        $files = storage_path('app/backups');
        try {
            $backups = collect(File::allFiles($files))->map(function($file){
                return [
                    'file_name' => $file->getFileName(),
                    'file_size' => $file->getSize()
                ];
            })->toArray();
        } catch (\Exception $e){
            $backups = [];
        }
        return Inertia::render('Configuration/Backup/BackupIndex', [
            'active' => 'backup',
            'backups' => $backups
        ]);
    }
}
