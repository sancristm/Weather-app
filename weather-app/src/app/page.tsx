'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import UnitToggle from '@/components/UnitToggle';
import WeatherCard from '@/components/WeatherCard';
import ForecastList from '@/components/ForecastList';
import { fetchWeather } from '@/lib/weatherApi';
import { WeatherData } from '@/types/weather';

export default function HomePage() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeather(city, unit);
      setWeather(data);
    } catch (err) {
      setError('Failed to fetch weather. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleUnit = (newUnit: 'metric' | 'imperial') => {
    setUnit(newUnit);
    if (weather) {
      handleSearch(weather.city);
    }
  };

  return (
    <main className='min-h-screen p-6 space-y-4'>
      <h1 className='text-3xl font-bold'>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <UnitToggle unit={unit} onToggle={handleToggleUnit} />

      {loading && <p className='text-info'>Loading...</p>}
      {error && <p className='text-error'>{error}</p>}

      {weather && (
        <>
          <WeatherCard data={weather} unit={unit} />
          <ForecastList forecast={weather.forecast} unit={unit} />
        </>
      )}
    </main>
  );
}
