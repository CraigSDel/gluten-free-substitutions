/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefce8',
          100: '#fef3c7',
          500: '#eab308', // wheat gold
          600: '#ca8a04',
          700: '#a16207',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e', // sage green
          600: '#16a34a',
          700: '#15803d',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          500: '#78716c',
          900: '#1c1917',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    }
  },
  plugins: [],
}
