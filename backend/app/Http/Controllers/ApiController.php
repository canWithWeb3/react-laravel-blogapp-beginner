<?php

namespace App\Http\Controllers;

class ApiController extends Controller
{
    public function success($data = [], $status = 200)
    {
        return response()->json($data, $status);
    }

    public function error($data = [], $status = 500)
    {
        return response()->json($data, $status);
    }
}
