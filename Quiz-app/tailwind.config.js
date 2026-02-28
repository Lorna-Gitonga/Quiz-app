/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#7256b3",
        "secondary": "#cd8ee4",
        "accent": "#19a7a3",
        "background": "#eceef5",
        "text": "#333333",
      },
    },
  },
  plugins: [],
}

