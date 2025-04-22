<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });



    Route::get('/weather', [WeatherController::class, 'show']);

    
    Route::get('/test', fn () => ['api' => 'working']);

