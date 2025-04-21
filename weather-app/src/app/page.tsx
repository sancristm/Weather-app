'use client';

import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('Nairobi');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    try {
      // Use the actual city and unit values from state
      const res = await fetch(
        `http://localhost:8000/api/weather?city=${city}&units=${unit}`,
        {
          method: 'GET',
          // Don't explicitly set mode to anything
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <main className='p-4 max-w-xl mx-auto'>
      <div className='flex gap-2 mb-4'>
        <input
          className='input input-bordered flex-1'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className='btn btn-primary' onClick={fetchWeather}>
          Search
        </button>
      </div>

      {weather && (
        <div className='card p-4'>
          <h2 className='font-bold text-lg'>
            {weather.location.city}, {weather.location.country}
          </h2>
          <p>
            {weather.current.temp}° — {weather.current.description}
          </p>
        </div>
      )}
    </main>
  );
}
