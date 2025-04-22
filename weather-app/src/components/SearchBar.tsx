'use client';

import { useState } from 'react';

interface Props {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-md mx-auto shadow-md rounded-lg overflow-hidden'
    >
      <input
        type='text'
        placeholder='Search Weather by City Name...'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className='flex-1 px-4 py-2 text-gray-700 focus:outline-none'
      />
      <button
        type='submit'
        className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 transition-colors duration-200'
      >
        Search
      </button>
    </form>
  );
}
