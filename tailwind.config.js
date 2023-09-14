/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default  {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blueColor': '#2a68ff',
        'grayIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36'
      }
    },
  },
  plugins: [],
}

