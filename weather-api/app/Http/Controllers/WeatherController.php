<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;

class WeatherController extends Controller
{
    public function show(Request $request)
    {
        $city = $request->query('city');
        $units = $request->query('units', 'metric'); // 'metric' or 'imperial'
        $apiKey = env('OPENWEATHER_API_KEY');

        if (!$city) {
            Log::warning('Missing city parameter in request.');
            return response()->json(['error' => 'City is required'], 400);
        }

        // Step 1: Get coordinates for the city
        $geoResponse = Http::get("https://api.openweathermap.org/geo/1.0/direct", [
            'q' => $city,
            'limit' => 1,
            'appid' => $apiKey
        ]);

        if ($geoResponse->failed() || count($geoResponse->json()) === 0) {
            Log::error("City not found: {$city}");
            return response()->json(['error' => 'City not found'], 404);
        }

        $location = $geoResponse[0];
        $lat = $location['lat'];
        $lon = $location['lon'];

        // Step 2: Get weather data
        $weatherResponse = Http::get("https://api.openweathermap.org/data/3.0/onecall", [
            'lat' => $lat,
            'lon' => $lon,
            'units' => $units,
            'exclude' => 'minutely,hourly,alerts',
            'appid' => $apiKey
        ]);

        if ($weatherResponse->failed()) {
            Log::error("Failed to fetch weather data for {$city}");
            return response()->json(['error' => 'Could not fetch weather data'], 500);
        }

        $data = $weatherResponse->json();

        Log::info("Weather data returned for {$city}");

        return response()->json([
            'location' => [
                'city' => $location['name'] ?? $city,
                'country' => $location['country'] ?? '',
                'lat' => $lat,
                'lon' => $lon,
            ],
            'current' => [
                'date' => Carbon::createFromTimestamp($data['current']['dt'])->toDateString(),
                'temp' => $data['current']['temp'],
                'description' => $data['current']['weather'][0]['description'],
                'icon' => $data['current']['weather'][0]['icon'],
                'humidity' => $data['current']['humidity'],
                'wind_speed' => $data['current']['wind_speed'],
            ],
            'forecast' => collect($data['daily'])->take(3)->map(function ($day) {
                return [
                    'date' => Carbon::createFromTimestamp($day['dt'])->toDateString(),
                    'temp' => [
                        'min' => $day['temp']['min'],
                        'max' => $day['temp']['max'],
                    ],
                    'description' => $day['weather'][0]['description'],
                    'icon' => $day['weather'][0]['icon'],
                    'humidity' => $day['humidity'],
                    'wind_speed' => $day['wind_speed'],
                ];
            })->values()
        ]);
    }
}
