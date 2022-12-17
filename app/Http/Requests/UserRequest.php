<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        if($this->user){
            return [
                'name' => ['required', 'string', 'min:3', 'max:255'],
                'last_name' => ['required', 'string', 'min:3', 'max:255'],
                'email' => ['required', 'email', Rule::unique('users')->ignore($this->user)],
                'phone_number' => ['required', 'string', 'min:10', 'max:20', Rule::unique('users')->ignore($this->user)],
                'password' => ['nullable', Password::default()],
                'confirm_password' => ['nullable', 'same:password'],
                'image' => ['nullable', 'file', 'image', 'max:5000'],
                'roles' => ['required'],
                'status' => ['required', 'boolean']
            ];

        }else{
            return [
                'name' => ['required', 'string', 'min:3', 'max:255'],
                'last_name' => ['required', 'string', 'min:3', 'max:255'],
                'email' => ['required', 'email', 'unique:users'],
                'phone_number' => ['required', 'string', 'min:10', 'max:20', 'unique:users'],
                'password' => ['required', Password::default()],
                'confirm_password' => ['required', 'same:password'],
                'image' => ['required', 'file', 'image', 'max:5000'],
                'roles' => ['required']
            ];

        }
    }
}
