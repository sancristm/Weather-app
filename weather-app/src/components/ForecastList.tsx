import { ForecastItem } from '@/types/weather';

interface ForecastListProps {
  forecast: ForecastItem[];
  unit: 'metric' | 'imperial';
}

export default function ForecastList({ forecast, unit }: ForecastListProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6'>
      {forecast.map((day, idx) => (
        <div key={idx} className='card bg-base-200 p-4 text-center'>
          <p className='font-semibold'>{day.date}</p>
          <img src={day.icon} alt='' className='mx-auto w-10 h-10' />
          <p>
            {day.temp}° {unit === 'metric' ? 'C' : 'F'}
          </p>
          <p className='capitalize text-xs'>{day.description}</p>
        </div>
      ))}
    </div>
  );
}
