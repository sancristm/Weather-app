export interface WeatherData {
  forecast: ForecastItem[];
  city: string;
  date: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
}

export interface ForecastItem {
  date: string;
  temp: number;
  description: string;
  icon: string;
}
