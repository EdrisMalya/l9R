<?php

namespace App\Http\Middleware;

use App\Models\PublicWebsite;
use Closure;
use Illuminate\Http\Request;

class PublicWebsiteMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $website_settings = cache()->remember('public_website_settings', 60*60*30, function (){
            return PublicWebsite::query()->first();
        });
        if(!$website_settings){
            return redirect()->to(route('dashboard', ['lang' => $request->lang]));
        }else{
            if(!$website_settings->status){
                return redirect()->to(route('dashboard', ['lang' => $request->lang]));
            }
        }
        return $next($request);
    }
}
