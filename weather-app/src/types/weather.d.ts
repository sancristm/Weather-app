export interface WeatherData {
  location: {
    city: string;
    country: string;
    lat: number;
    lon: number;
  };
  current: {
    date: string;
    temp: number;
    description: string;
    icon: string;
    humidity: number;
    wind_speed: number;
  };
  forecast: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  temp: {
    min: number;
    max: number;
  };
  description: string;
  icon: string;
  humidity: number;
  wind_speed: number;
}
