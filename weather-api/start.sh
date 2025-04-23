#!/bin/bash

# Use Railway-provided port, default to 8080 if not set (for local testing)

PORT=${PORT:-8080}

echo "Serving Laravel on port $PORT..."

php -S 0.0.0.0:$PORT -t public
