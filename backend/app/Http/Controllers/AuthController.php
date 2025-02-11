<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends ApiController
{
    public function postRegister(RegisterRequest $request)
    {
        $inputs = $request->only(['username', 'email']);
        $inputs['password'] = bcrypt($request->password);

        User::create($inputs);

        return $this->success([
            'message' => 'Kullanıcı oluşturuldu'
        ], 201);
    }

    public function postLogin(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password))
            return $this->error([
                'message' => 'E-posta veya parola hatalı'
            ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return $this->success([
            'message' => 'Giriş yapıldı',
            'token' => $token,
            'role' => $user->role
        ], 201);
    }
}
