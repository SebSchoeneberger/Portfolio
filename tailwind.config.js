/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'node-green': '#339933',
        'mongo-green': '#47A248',
        'express-grey': '#373E40',
        'react-blue': '#61DAFB',
        'custom-dark': '#305252',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#339933',
          secondary: '#47A248',
          accent: '#61DAFB',
          neutral: '#F5F5F5',
          'base-100': '#FFFFFF',
          info: '#61DAFB',
          success: '#47A248',
          warning: '#FACC15',
          error: '#305252',
        },
      },
      {
        dark: {
          primary: '#339933',
          secondary: '#47A248',
          accent: '#61DAFB',
          neutral: '#373E40',
          'base-100': '#121212',
          info: '#61DAFB',
          success: '#47A248',
          warning: '#FACC15',
          error: '#305252',
        },
      },
    ],
  },
};
