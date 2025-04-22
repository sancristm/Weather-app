'use client';

import { useState } from 'react';

interface Props {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = city.trim();

    if (!trimmed || /[^a-zA-Z\s]/.test(trimmed)) {
      setError('Please enter a valid city name.');
      return;
    }

    setError('');
    onSearch(trimmed);
    setCity('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-md mx-auto shadow-md rounded-lg overflow-hidden'
    >
      <input
        type='text'
        placeholder='Enter city name...'
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          if (error) setError('');
        }}
        className='flex-1 px-4 py-2 text-gray-700 focus:outline-none'
      />
      <button
        type='submit'
        className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 transition-colors duration-200 disabled:opacity-50'
        disabled={!city.trim()}
      >
        Search
      </button>
      {error && (
        <div className='mt-2 text-sm text-red-600'>
          <p className='bg-red-100 border border-red-300 px-4 py-2 rounded-md'>
            {error}
          </p>
        </div>
      )}
    </form>
  );
}
