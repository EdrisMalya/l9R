<?php

namespace App\Http\Controllers\UserManagement;

use App\Helpers\DatatableBuilder;
use App\Http\Controllers\Controller;
use App\Models\LoginLog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginLogController extends Controller
{
    public function index($lang, Request $request){
        $this->allowed('login-log-access');
        $logs = LoginLog::query();
        $datatable = new DatatableBuilder($logs, $request, ['email', 'ip_address']);
        return Inertia::render('UserManagement/LoginLogIndex', [
            'active' => 'login_logs',
            'logs' => $datatable->build()
        ]);
    }

    public function destroy($lang, $login_log){
        $this->allowed('login-log-truncate');
        LoginLog::query()->truncate();
        activity()->useLog('Login log')
            ->log('truncated');
        return back()->with(['message'=>translate('Deleted successfully'), 'type'=>'success']);
    }
}
