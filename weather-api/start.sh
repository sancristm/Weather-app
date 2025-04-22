#!/bin/bash

# Use Railway-provided port, default to 8080 if not set (for local testing)
PORT=${PORT:-8080}

echo "Starting Laravel server on port $PORT..."
php artisan serve --host=0.0.0.0 --port=$PORT

