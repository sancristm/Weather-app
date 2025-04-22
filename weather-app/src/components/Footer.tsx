'use client';

export default function Footer() {
  return (
    <footer className='mt-12 border-t pt-6 text-center text-sm text-gray-600'>
      <div className='space-x-4'>
        <a
          href='https://openweathermap.org/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          OpenWeatherMap API
        </a>

        <a
          href='https://github.com/sancristm/Weather-app'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          GitHub
        </a>
      </div>
      <p className='mt-4'>
        &copy; {new Date().getFullYear()} Sancrist Mamboleo. All rights
        reserved.
      </p>
    </footer>
  );
}
