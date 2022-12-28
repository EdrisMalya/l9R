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
            'logo' => ['sometimes', 'nullable', 'max:5000'],
            'image_or_slider' => ['required', 'string'],
            'image' => ['sometimes', 'nullable', 'max:5000'],
            'company_name' => ['required', 'string', 'min:2', 'max:250'],
            'title' => ['required', 'string', 'min:2', 'max:250'],
            'short_description' => ['required', 'string', 'min:2', 'max:250'],
            'long_description' => ['nullable'],
            'email' => ['required', 'email'],
            'phone_number' => ['required', 'string', 'min:2', 'max:250'],
            'address' => ['required', 'string', 'min:2', 'max:250'],
            'facebook' => ['nullable', 'string', 'min:2', 'max:250'],
            'tweeter' => ['nullable', 'string', 'min:2', 'max:250'],
            'youtube' => ['nullable', 'string', 'min:2', 'max:250'],
            'instagram' => ['nullable', 'string', 'min:2', 'max:250'],
            'copy_right' => ['nullable', 'string', 'min:2', 'max:250'],
        ];
    }
}
