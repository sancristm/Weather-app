#!/bin/bash

echo "PORT is: $PORT"
php -S 0.0.0.0:$PORT -t public
