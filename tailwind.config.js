/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '0 0 10px 100px #1882A8 inset',
      },
      maxHeight: {
        'customH': '494px'
      }
    },
  },
  plugins: [],
}

