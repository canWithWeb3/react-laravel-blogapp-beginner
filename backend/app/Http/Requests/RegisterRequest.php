<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'username' => 'bail|required|max:255',
            'email' => 'bail|required|email:rfc,dns|unique:users,email|max:255',
            'password' => 'bail|required|same:repassword|max:255',
        ];
    }

    public function attributes()
    {
        return [
            'username' => 'Kullanıcı Adı',
            'email' => 'E-posta',
            'password' => 'Parola',
            'repassword' => 'Parola (Tekrar)'
        ];
    }
}
