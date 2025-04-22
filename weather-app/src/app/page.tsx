'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import UnitToggle from '@/components/UnitToggle';
import WeatherCard from '@/components/WeatherCard';
import ForecastList from '@/components/ForecastList';
import { fetchWeather } from '@/lib/weatherApi';
import { WeatherData } from '@/types/weather';
import WeatherCardSkeleton from '@/components/WeatherCardSkeleton';
import ForecastSkeleton from '@/components/ForecastSkeleton';

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
    } catch (err: any) {
      console.log(err);

      //  Extract error message from the laravel server
      const message = err?.message || 'Something went wrong. Please try again.';
      setError(message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleUnit = (newUnit: 'metric' | 'imperial') => {
    setUnit(newUnit);
    if (weather) {
      handleSearch(weather.location.city);
    }
  };

  return (
    <main className='min-h-screen bg-gradient-to-br from-sky-100 to-indigo-100 text-gray-800 p-6'>
      <div className='max-w-4xl mx-auto space-y-6'>
        <h1 className='text-4xl font-bold text-center'> Weather App</h1>

        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <SearchBar onSearch={handleSearch} />
          <UnitToggle unit={unit} onToggle={handleToggleUnit} />
        </div>

        {error && (
          <div className='bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md text-center'>
            <strong className='font-semibold'>Error:</strong> {error}
          </div>
        )}

        {loading ? (
          <>
            <WeatherCardSkeleton />
            <ForecastSkeleton />
          </>
        ) : (
          weather && (
            <>
              <WeatherCard data={weather} unit={unit} />
              <h2 className='text-xl font-semibold mt-8'>
                3-Day Forecast in {weather.location.city} would likely be:
              </h2>
              <ForecastList forecast={weather.forecast} unit={unit} />
            </>
          )
        )}
      </div>
    </main>
  );
}
