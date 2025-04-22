'use client';

interface Props {
  unit: 'metric' | 'imperial';
  onToggle: (unit: 'metric' | 'imperial') => void;
}

export default function UnitToggle({ unit, onToggle }: Props) {
  return (
    <div className='inline-flex rounded-md shadow-sm overflow-hidden'>
      <button
        onClick={() => onToggle('metric')}
        className={`px-4 py-2 font-medium text-sm ${
          unit === 'metric'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-700 hover:bg-indigo-100'
        } transition-colors duration-200`}
      >
        °C
      </button>
      <button
        onClick={() => onToggle('imperial')}
        className={`px-4 py-2 font-medium text-sm ${
          unit === 'imperial'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-700 hover:bg-indigo-100'
        } transition-colors duration-200`}
      >
        °F
      </button>
    </div>
  );
}
