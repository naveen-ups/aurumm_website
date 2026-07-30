/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cinzel', 'Times New Roman', 'serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['EB Garamond', 'Cormorant Garamond', 'Georgia', 'serif'],
        script: ['Pinyon Script', 'Parisienne', 'Great Vibes', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        maroon: {
          DEFAULT: '#4A0612',
          dark: '#3E1122',
          deep: '#3F101B',
        },
        cream: {
          DEFAULT: '#F8F3E9',
          card: '#F8F2EC',
        },
        gold: {
          DEFAULT: '#C5A882',
          accent: '#9C7C5E',
        },
        body: '#6B5348',
        'text-dark': '#40312A',
      },
    },
  },
  plugins: [],
}
