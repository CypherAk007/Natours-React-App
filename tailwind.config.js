/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('/images/hero-small.jpg')"
      },
      boxShadow:{
        'button':'0 10px 20px rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
}

