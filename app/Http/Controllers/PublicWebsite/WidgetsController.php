<?php

namespace App\Http\Controllers\PublicWebsite;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WidgetsController extends Controller
{
    public function store($lag, Request $request){
        $this->allowed('widgets-create-widgets');
        $data = $request->validate([
            'name' => ['required']
        ]);
        dd($data);
    }
}
