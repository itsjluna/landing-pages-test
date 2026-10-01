/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mariana: {
          light: '#f3e8ff', // purple-100
          DEFAULT: '#9333ea', // purple-600
          dark: '#581c87', // purple-900
        },
        shev: {
          blue: '#1d4ed8', // blue-700
          red: '#dc2626', // red-600
          light: '#f8fafc', // slate-50
          dark: '#0f172a', // slate-900
        }
      }
    },
  },
  plugins: [],
}
