<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PublicWebsiteRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'status' => ['required', 'boolean'],
            'logo' => ['required', 'file', 'image'],
        ];
    }
}
