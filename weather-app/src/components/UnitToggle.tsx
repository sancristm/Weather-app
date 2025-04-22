'use client';

interface UnitToggleProps {
  unit: 'metric' | 'imperial';
  onToggle: (unit: 'metric' | 'imperial') => void;
}

export default function UnitToggle({ unit, onToggle }: UnitToggleProps) {
  return (
    <div className='flex gap-2 items-center p-4'>
      <button
        className={`btn ${unit === 'metric' ? 'btn-primary' : 'btn-outline'}`}
        onClick={() => onToggle('metric')}
      >
        °C
      </button>
      <button
        className={`btn ${unit === 'imperial' ? 'btn-primary' : 'btn-outline'}`}
        onClick={() => onToggle('imperial')}
      >
        °F
      </button>
    </div>
  );
}
