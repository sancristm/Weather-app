'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState('Nairobi');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2 p-4'>
      <input
        type='text'
        placeholder='Enter city name'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className='input input-bordered w-full max-w-md'
      />
      <button type='submit' className='btn btn-primary'>
        Search
      </button>
    </form>
  );
}
