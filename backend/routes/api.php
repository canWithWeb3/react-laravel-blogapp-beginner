<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = $request->user();

    return response()->json([
        'user' => [
            'id' => $user->id,
            'username' => $user->username,
            'role' => $user->role,
        ]
    ], 200);
});

Route::get('/example', function(){
    return response()->json([
        'message' => 'example message'
    ]);
});

// auth
Route::prefix('/auth')->controller(AuthController::class)->group(function(){
    // guest middleware
    Route::middleware('guest:sanctum')->group(function(){
        Route::post('/register', 'postRegister');
        Route::post('/login', 'postLogin');
    });

    // auth middleware
    Route::middleware('auth:sanctum')->group(function(){

    });
});

// admin
Route::prefix('/admin')->middleware('auth:sanctum')->group(function(){
    Route::apiResource('/categories', CategoryController::class);
    Route::apiResource('/blogs', BlogController::class);
});
