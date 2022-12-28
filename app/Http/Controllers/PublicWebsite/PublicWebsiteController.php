<?php

namespace App\Http\Controllers\PublicWebsite;

use App\Http\Controllers\Controller;
use App\Http\Requests\PublicWebsiteRequest;
use App\Models\PublicWebsite;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicWebsiteController extends Controller
{
    public function homePage(){
        return Inertia::render('PublicWebsite/HomePage');
    }

    public function index($lang)
    {
        $this->allowed('public-website-access');
        $data = [
            'active' => 'public-website',
            'active_component' => \request()->get('active')
        ];
        if(!\request()->has('active')){
            abort(404);
        }else{
            $allowed_urls = ['main-page', 'pages'];
            if(!in_array($data['active_component'], $allowed_urls)) abort(404);
            switch ($data['active_component']){
                case 'main-page':
                    $data['public_website'] = PublicWebsite::query()->first();
                    break;
            }
        }
        return Inertia::render('Configuration/PublicWebsite/PublicWebsiteIndex', $data);
    }

    public function store($lang, PublicWebsiteRequest $request){
        dd($request->validated());
    }
}
