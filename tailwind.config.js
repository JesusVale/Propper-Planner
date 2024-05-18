/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    "col-end-2",
    "col-end-3",
    "col-end-4",
    "col-end-5",
    "col-end-6",
    "col-end-7",
    "col-end-8"
  ],
  theme: {
    fontFamily: {
      'title-font': ["Be Vietnam Pro", "sans-serif"]
    },
    extend: {
      colors: {
        'main-color': '#0466F6',
        'hover-color': '#3684F7'
      }
    },
  },
  plugins: [],
}

