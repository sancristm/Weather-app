// src/app/layout.tsx
import './globals.css'; // you can leave this empty or remove it

export const metadata = {
  title: 'Weather App',
  description: 'Next.js + Laravel Weather Demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        {/* Tailwind via CDN */}
        <script src='https://cdn.tailwindcss.com'></script>
        {/* RippleUI CSS for ripple effects and prebuilt components */}
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/rippleui/dist/rippleui.min.css'
        />
      </head>
      <body className='bg-gray-100 min-h-screen antialiased'>{children}</body>
    </html>
  );
}
