/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily:{
          'body':" Helvetica Neue "
       },

      colors:{
           azul: {
             500: '#54B4EA',
             700: '#0363BB',
             900: '#023785'
          }

          
         },
    },
  },
  plugins: [],
}