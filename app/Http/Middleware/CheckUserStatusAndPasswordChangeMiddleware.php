<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserStatusAndPasswordChangeMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if(!$request->user()->status){
            session()->flash('message', 'Account is disabled! Please contact with your admin');
            session()->flash('type', 'error');
            Auth::logout();
            return back();
        }
        if($request->user()->change_password){
            return redirect()->to(route('change.password', ['lang'=>$request->lang]));
        }
        return $next($request);
    }
}
