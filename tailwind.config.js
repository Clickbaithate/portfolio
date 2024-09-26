/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
        },
      },
      animation: {
        moveUpDown: 'moveUpDown 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}