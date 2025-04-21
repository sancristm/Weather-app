
 <?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;
use App\Http\Middleware\AddCorsHeaders;


Route::options('/{any}', function() {
    return response()->json(null, 200)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, X-CSRF-TOKEN');
})->where('any', '.*');


Route::middleware([AddCorsHeaders::class])->group(function () {
    Route::get('/weather', [WeatherController::class, 'show']);

    
    Route::get('/test', fn () => ['api' => 'working']);
});
