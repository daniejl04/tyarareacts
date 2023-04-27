/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
           blue: {
             500: '#54B4EA',
             700: '#0363BB',
             900: '#023785'
          }
         },
    },
  },
  plugins: [],
}