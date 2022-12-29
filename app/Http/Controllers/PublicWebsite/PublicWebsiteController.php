<?php

namespace App\Http\Controllers\PublicWebsite;

use App\Http\Controllers\Controller;
use App\Http\Controllers\HelperController;
use App\Http\Requests\PublicWebsiteRequest;
use App\Models\PublicWebsite;
use App\Models\Widget;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicWebsiteController extends Controller
{
    public function homePage(){
        return Inertia::render('PublicWebsite/HomePage', [
            'website' => cache()->get('public_website_settings')
        ]);
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
            $allowed_urls = ['main-page', 'pages', 'widgets', 'widget-details'];
            if(!in_array($data['active_component'], $allowed_urls)) abort(404);
            switch ($data['active_component']){
                case 'main-page':
                    $data['public_website'] = PublicWebsite::query()->first();
                    break;
                case 'widgets':
                    $this->allowed('widgets-access');
                    $data['widgets'] = Widget::query()->get();
                    break;
                case 'widget-details':
                    $widget = Widget::query()->findOrFail(request()->get('widget'));
                    $data['widget'] = $widget;
                    break;
            }
        }
        return Inertia::render('Configuration/PublicWebsite/PublicWebsiteIndex', $data);
    }

    public function store($lang, PublicWebsiteRequest $request){
        $public_website = PublicWebsite::query()->first();
        $data = $request->validated();
        if($request->file('logo') != null){
            HelperController::removeFile($public_website->logo);
            $data['logo'] = $request->file('logo')->store('website_logo', 'public');
        }
        if($request->file('image') != null){
            HelperController::removeFile($public_website->logo);
            $data['image'] = $request->file('image')->store('website_main_page_image', 'public');
        }
        cache()->forget('public_website_settings');
        if(!$public_website){
            PublicWebsite::query()->create($data);
            return back()->with(['type'=>'success', 'message' => translate('Saved successfully')]);
        }else{
            $public_website->update($data);
            return back()->with(['type'=>'success', 'message' => translate('Updated successfully')]);
        }
    }
}
