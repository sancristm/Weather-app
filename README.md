# Weather-app
Weather app using Open WeathermapAPI



# Weather App Frontend

A weather application built with Next.js and TypeScript that displays current weather and forecast data.


## Features

- Current weather conditions display
- 3-day weather forecast
- City search functionality
- Toggle between metric and imperial units
- Responsive design for all device sizes
- Loading state skeletons for better user experience

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - State management

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.8 or later)
- [npm](https://www.npmjs.com/) (v7 or later) or [yarn](https://yarnpkg.com/) (v1.22 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```

## Configuration

The application is configured to work with the backend Weather API. Ensure your backend is running at the URL specified in the `.env.local` file.

The default configuration connects to a backend at `http://localhost:8000/api/weather`.

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build the application for production:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
weather-app/
├── public/              # Static files
├── src/
│   ├── app/             # Next.js app directory
│   │   └── page.tsx     # Home page component
│   ├── components/      # React components
│   │   ├── ForecastList.tsx
│   │   ├── ForecastSkeleton.tsx
│   │   ├── Footer.tsx
│   │   ├── SearchBar.tsx
│   │   ├── UnitToggle.tsx
│   │   ├── WeatherCard.tsx
│   │   └── WeatherCardSkeleton.tsx
│   ├── lib/             # Utility functions
│   │   └── weatherApi.ts
│   └── types/           # TypeScript type definitions
│       └── weather.ts
├── .env.local           # Environment variables
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## API Integration

The application uses a custom API client in `src/lib/weatherApi.ts` to fetch weather data from the backend. The `fetchWeather` function handles requests to the backend API with city and unit parameters.

## Adding New Features

To add new features to the application:

1. Create new components in the `src/components` directory
2. Update or create new types in the `src/types` directory
3. Modify the main page component in `src/app/page.tsx`

## Testing

Run tests:

```bash
npm run test
# or
yarn test
```

## Deployment

This application can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/weather-app)

Alternatively, you can deploy to any hosting service that supports Next.js applications.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).



## Views

![image](https://github.com/user-attachments/assets/4e95ae1e-0429-4b93-bc76-9db3c83c47cb)
