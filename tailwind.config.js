/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '450px', // 👈 apna custom breakpoint
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}