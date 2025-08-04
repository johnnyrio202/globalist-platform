/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3ff',
          100: '#b3d9ff',
          500: '#0066cc',
          600: '#004499',
          700: '#003366',
        },
        accent: {
          500: '#ff6b35',
        },
      },
    },
  },
  plugins: [],
}