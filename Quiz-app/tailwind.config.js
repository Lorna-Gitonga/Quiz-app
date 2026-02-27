/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#cbeceb",
        "secondary": "#cd8ee4",
        "accent": "#2c55e0",
        "background": "#F0F8FF",
        "text": "#333333",
      },
    },
  },
  plugins: [],
}

