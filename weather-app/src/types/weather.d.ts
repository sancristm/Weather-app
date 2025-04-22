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

export interface WeatherData {
  city: string;
  country: string;
  lat: number;
  lon: number;
  current: ForecastDay;
  forecast: ForecastDay[];
}
