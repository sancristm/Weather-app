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
    const errorData = await response.json();
    throw new Error(errorData.error || 'Something went wrong');
  }

  return await response.json();
}
