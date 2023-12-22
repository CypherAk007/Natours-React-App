/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "--color-primary":"#55c57a",
        '--color-primary-light':"#7ed56f",
        '--color-primary-dark': "#28b485",
        '--color-grey-light-1': "#faf9f9",
        '--color-grey-light-2': "#f4f2f2",
        '--color-grey-light-3': "#f0eeee",
        '--color-grey-light-4':' #ccc',
        '--color-grey-dark-1': '#333',
        '--color-grey-dark-2': '#777',
        '--color-grey-dark-3': '#999',
      },
      backgroundImage:{
        'hero':"url('/images/hero-small.jpg')"
      },
      boxShadow:{
        'button':'0 10px 20px rgba(0,0,0,0.2)',
        'dark':'0 2.5rem 4rem rgba(0,0,0,.5);'
      },
      backgroundImage:{
        'mountain':"url('/src/assets/img/nat-4')",
      }
    },
  },
  plugins: [],
}

