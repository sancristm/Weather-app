import { WeatherData } from '@/types/weather';

interface WeatherCardProps {
  data: WeatherData;
  unit: 'metric' | 'imperial';
}

export default function WeatherCard({ data, unit }: WeatherCardProps) {
  return (
    <div className='card w-full max-w-md bg-base-100 shadow-xl p-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-xl font-semibold'>{data.city}</h2>
          <p>{data.date}</p>
          <p className='capitalize'>{data.description}</p>
        </div>
        <img src={data.icon} alt='Weather icon' className='w-16 h-16' />
      </div>
      <div className='mt-4 text-4xl font-bold'>
        {data.temp}° {unit === 'metric' ? 'C' : 'F'}
      </div>
      <div className='mt-2 text-sm'>
        <p>Humidity: {data.humidity}%</p>
        <p>
          Wind: {data.windSpeed} {unit === 'metric' ? 'm/s' : 'mph'}
        </p>
      </div>
    </div>
  );
}
