<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | This config applies CORS headers to all routes and allows any origin,
    | useful for local development. Lock this down for production!
    |
    */

    'paths' => ['*'], // 👈 Allow CORS on all routes in development mode

    'allowed_methods' => ['*'], // 👈 Allow all HTTP methods

    'allowed_origins' => ['*'], // 👈 Allow any frontend origin

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // 👈 Allow all headers

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];

