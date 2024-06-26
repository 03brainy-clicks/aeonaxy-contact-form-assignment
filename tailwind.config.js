/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        paypal :{
          primaryBlue:"#022069",
          secondaryBlue:"#066FB3",
          bubble:"#E3F1FA",
          arrow:"#0C6BA5"
        }
      }
    },
  },
  plugins: [],
}