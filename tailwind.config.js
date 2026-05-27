/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          finBlack: '#000D12',
          finOffWhite: '#E9F4F9',
          finBlue: '#00B4FD',
          finDarkBlue: '#003ACE',
        },
        fontFamily: {
          archivo: ['Archivo', 'sans-serif'],
          chivo: ['Chivo Mono Medium', 'monospace'],
          'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
          'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }