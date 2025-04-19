<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;


class WeatherController extends Controller
{
    //

     public function show(Request $request)
    {
        $city = $request->query('city');

        if (!$city) {
            return response()->json(['error' => 'City is required'], 400);
        }

        $apiKey = config('services.openweather.key');

        // Step 1: Get coordinates using Geocoding API
        $geoResponse = Http::get("http://api.openweathermap.org/geo/1.0/direct", [
            'q' => $city,
            'limit' => 1,
            'appid' => $apiKey
        ]);

        if ($geoResponse->failed() || count($geoResponse->json()) === 0) {
            return response()->json(['error' => 'City not found'], 404);
        }

        $location = $geoResponse->json()[0];
        $lat = $location['lat'];
        $lon = $location['lon'];

        // Step 2: Get weather using One Call API
        $weatherResponse = Http::get("https://api.openweathermap.org/data/3.0/onecall", [
            'lat' => $lat,
            'lon' => $lon,
            'units' => $request->query('units', 'metric'),
            'exclude' => 'minutely,hourly,alerts',
            'appid' => $apiKey
        ]);

        if ($weatherResponse->failed()) {
            return response()->json(['error' => 'Unable to fetch weather'], 500);
        }

        return response()->json([
            'location' => [
                'name' => $location['name'] ?? $city,
                'country' => $location['country'] ?? '',
                'lat' => $lat,
                'lon' => $lon,
            ],
            'weather' => $weatherResponse->json()
        ]);
    }
}
