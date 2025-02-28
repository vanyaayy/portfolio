/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: { animation: {
        'bounce-slow': 'bounce 6s infinite ease-in-out',
        'bounce-medium': 'bounce 4s infinite ease-in-out',
        'bounce-fast': 'bounce 3s infinite ease-in-out',
      }},
    },
    plugins: [],
  };
  