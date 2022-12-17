<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Configurations\LanguageController;
use App\Models\Language;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class LanguageMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if($request->lang == 'eng'){
            return $next($request);
        }else{
            $languages_abbreviations = LanguageController::getAllLanguages();
            $abbrs = collect($languages_abbreviations)->map(function($lang){
                return $lang->abbr;
            })->toArray();
            if(in_array($request->lang, $abbrs)){
                return $next($request);
            }else{
                abort(404);
            }
        }
    }
}
