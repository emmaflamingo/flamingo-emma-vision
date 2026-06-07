/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-soft': '#FFB6D9',
        'pink-pale': '#FFC9E3',
        'pink-deep': '#FF69B4',
        'rose-light': '#FFE4F0',
        'flamingo': '#FF1493',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
