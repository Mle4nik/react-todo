/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
			'desktop-lg': '1920px',
			'desktop': '1440px',
			'tablet-lg': '1024px',
			'tablet': '768px',
      'mobile-lg': '425px',
			'mobile': '320px'
		},
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

