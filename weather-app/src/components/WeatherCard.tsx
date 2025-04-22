'use client';

import React from 'react';
import { WeatherData } from '@/types/weather';

interface Props {
  data: WeatherData;
  unit: 'metric' | 'imperial';
}

export default function WeatherCard({ data, unit }: Props) {
  const unitSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <div className='p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto'>
      <h2 className='text-2xl font-bold mb-2'>
        {data.location.city}, {data.location.country}
      </h2>
      <p className='text-gray-500 mb-4'>{data.current.date}</p>

      <div className='flex items-center gap-4'>
        <img
          src={`https://openweathermap.org/img/wn/${data.current.icon}@2x.png`}
          alt={data.current.description}
          className='w-20 h-20'
        />

        <div>
          <p className='text-4xl font-semibold'>
            {data.current.temp}
            {unitSymbol}
          </p>
          <p className='capitalize text-gray-700'>{data.current.description}</p>
        </div>
      </div>

      <div className='mt-4 space-y-1 text-sm text-gray-600'>
        <p>Humidity: {data.current.humidity}%</p>
        <p>Wind speed: {data.current.wind_speed} m/s</p>
      </div>
    </div>
  );
}
