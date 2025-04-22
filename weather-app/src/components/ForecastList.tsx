'use client';

import React from 'react';
import { ForecastDay } from '@/types/weather';

interface Props {
  forecast: ForecastDay[];
  unit: 'metric' | 'imperial';
}

export default function ForecastList({ forecast, unit }: Props) {
  const unitSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {forecast.map((day, index) => (
        <div key={index} className='p-4 bg-white shadow-md rounded-lg'>
          <p className='font-semibold text-lg'>{day.date}</p>
          <img
            src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
            alt={day.description}
            className='w-16 h-16'
          />
          <p>{day.description}</p>
          <p>
            <span className='font-medium'>Min:</span> {day.temp.min}
            {unitSymbol}
          </p>
          <p>
            <span className='font-medium'>Max:</span> {day.temp.max}
            {unitSymbol}
          </p>
          <p>Humidity: {day.humidity}%</p>
          <p>Wind: {day.wind_speed} m/s</p>
        </div>
      ))}
    </div>
  );
}
