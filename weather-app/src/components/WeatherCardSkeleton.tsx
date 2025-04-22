'use client';

import Skeleton from './Skeleton';

export default function WeatherCardSkeleton() {
  return (
    <div className='p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto space-y-4'>
      <Skeleton className='w-40 h-6' />
      <Skeleton className='w-24 h-4' />
      <div className='flex gap-4 items-center'>
        <Skeleton className='w-20 h-20 rounded-full' />
        <div className='flex flex-col gap-2'>
          <Skeleton className='w-24 h-6' />
          <Skeleton className='w-32 h-4' />
        </div>
      </div>
      <Skeleton className='w-full h-4' />
      <Skeleton className='w-3/4 h-4' />
    </div>
  );
}
