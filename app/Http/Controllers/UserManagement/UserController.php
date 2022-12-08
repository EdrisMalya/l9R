<?php

namespace App\Http\Controllers\UserManagement;

use App\Helpers\DatatableBuilder;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request){
        $search_columns = ['name', 'email'];
        $users = User::query()->where('id', '!=', auth()->id());
        $datatable = new DatatableBuilder($users, $request, $search_columns);
        return Inertia::render('UserManagement/Users/UserIndex', [
            'active' => 'users',
            'users' => $datatable->build(),
            'roles' => Role::all()
        ]);
    }

    public function store(UserRequest $request){
        dd($request->validated());
    }
}
