<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function test(){
        return Inertia::render('Test/Test', [
            'test' => 'This is for testing test',
            'array' => [1,2,3,4,5,6]
        ]);
    }
}
