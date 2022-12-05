<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserManagementController extends Controller
{
    public function index(){
        return Inertia::render('UserManagement/Users/UserIndex', [
            'active' => 'users'
        ]);
    }
}
