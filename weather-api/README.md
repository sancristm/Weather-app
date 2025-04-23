# Weather API

A simple API that provides weather information for various cities using openweather Api

## API Documentation

### GET /api/weather

This endpoint retrieves current weather information and forecast data for a specified city.

#### Request

-   **Method:** GET
-   **URL:** `http://localhost:8000/api/weather`
-   **Query Parameters:**
    -   `city` (string, required): The name of the city for which weather information is requested.
    -   `units` (string, required): The unit of measurement for the temperature (e.g., 'metric', 'imperial').

#### Example Request

```
GET http://localhost:8000/api/weather?city=London&units=metric
```

#### Response

The response will be in JSON format with the following structure:

```json
{
    "location": {
        "city": "London",
        "country": "GB",
        "lat": 51.5074,
        "lon": -0.1278
    },
    "current": {
        "date": "2025-04-23",
        "temp": 18.5,
        "description": "Partly cloudy",
        "icon": "02d",
        "humidity": 65,
        "wind_speed": 4.2
    },
    "forecast": [
        {
            "date": "2025-04-24",
            "temp": {
                "min": 16.2,
                "max": 22.5
            },
            "description": "Sunny",
            "icon": "01d",
            "humidity": 58,
            "wind_speed": 3.7
        }
        // Additional forecast days...
    ]
}
```

#### Response Fields

**Location Object**

-   `city` (string): The name of the requested city
-   `country` (string): The country code where the city is located
-   `lat` (number): The latitude coordinate of the city
-   `lon` (number): The longitude coordinate of the city

**Current Object**

-   `date` (string): The current date in YYYY-MM-DD format
-   `temp` (number): The current temperature in the requested units
-   `description` (string): A text description of the current weather
-   `icon` (string): Weather condition icon code
-   `humidity` (number): The current humidity percentage
-   `wind_speed` (number): The current wind speed in the requested units

**Forecast Array**

-   Array of forecast objects, each containing:
    -   `date` (string): Forecast date in YYYY-MM-DD format
    -   `temp` (object): Contains `min` and `max` temperature values for the day
    -   `description` (string): A text description of the forecasted weather
    -   `icon` (string): Weather condition icon code
    -   `humidity` (number): The forecasted humidity percentage
    -   `wind_speed` (number): The forecasted wind speed
