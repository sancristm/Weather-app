import { WeatherData } from '@/types/weather';

const API_BASE_URL = 'http://localhost:8000/api';

export async function fetchWeather(
  city: string,
  units: 'metric' | 'imperial'
): Promise<WeatherData> {
  const response = await fetch(
    `${API_BASE_URL}/weather?city=${encodeURIComponent(city)}&units=${units}`,
    {
      next: { revalidate: 0 },
    }
  );

  if (!response.ok) {
    throw new Error(`Error fetching weather: ${response.statusText}`);
  }

  return await response.json();
}
