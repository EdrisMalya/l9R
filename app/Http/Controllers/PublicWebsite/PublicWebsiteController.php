<?php

namespace App\Http\Controllers\PublicWebsite;

use App\Http\Controllers\Controller;
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
        return Inertia::render('Configuration/PublicWebsite/PublicWebsiteIndex', [
            'active' => 'public-website'
        ]);
    }
}
