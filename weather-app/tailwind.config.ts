import type { Config } from 'tailwindcss';
import rippleui from 'rippleui';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [rippleui as any],
};

export default config;
