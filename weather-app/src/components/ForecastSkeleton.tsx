'use client';

import Skeleton from './Skeleton';

export default function ForecastSkeleton() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {[1, 2, 3].map((_, i) => (
        <div key={i} className='p-4 bg-white shadow-md rounded-lg space-y-2'>
          <Skeleton className='w-24 h-5' />
          <Skeleton className='w-16 h-16 rounded-full' />
          <Skeleton className='w-3/4 h-4' />
          <Skeleton className='w-1/2 h-4' />
          <Skeleton className='w-2/3 h-4' />
          <Skeleton className='w-1/3 h-4' />
        </div>
      ))}
    </div>
  );
}
