/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ['Commissioner', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      animation: {
        heartbeat: 'heartbeat 0.8s infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(1.2)' },
          '40%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(1.2)' },
          '80%': { transform: 'scale(1)' },
        },
      },
        animation: {
          fadeIn: 'fadeIn 0.4s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
    },
  },
  plugins: [],
}