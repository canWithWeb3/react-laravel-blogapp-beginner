<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Token bulunamadı'], 401);
        }

        return redirect()->guest(route('login'));
    }

    public function render($request, Throwable $exception)
    {
        // ValidationException için özel mesaj
        if ($exception instanceof ValidationException) {
            return response()->json([
                'errors' => $exception->errors()
            ], 422);
        }

        // ModelNotFoundException için özel mesaj
        if ($exception instanceof ModelNotFoundException) {
            return response()->json([
                'error' => 'Aradığınız kayıt bulunamadı.'
            ], 404);
        }

        // NotFoundHttpException için özel mesaj
        if ($exception instanceof NotFoundHttpException) {
            return response()->json([
                'error' => 'Not Found Page Exception'
            ], 404);
        }

        // MethodNotAllowedException için özel mesaj
        if ($exception instanceof MethodNotAllowedException) {
            return response()->json([
                'error' => 'Method Not Found Exception'
            ], 405);
        }

        if ($exception instanceof AuthenticationException) {
            return response()->json([
                'error' => 'Token geçersiz veya bulunamadı: '.$exception->getMessage()
            ], 401);
        }

        // Exception için özel mesaj
        if ($exception instanceof Exception) {
            return response()->json([
                'error' => 'Global Error'.$exception->getMessage()
            ], 500);
        }

        return parent::render($request, $exception);
    }
}
