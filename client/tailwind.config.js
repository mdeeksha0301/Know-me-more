/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Corrected typo here
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#080121',
        secondary: '#120239',
        third: '#260656',
        fourth: '#4A1985',
        fivth: '#A580CA',

        // Dark mode colors
        darkPrimary: '#3498db',
        darkSecondary: '#2ecc71',
      },
    },
    screens: {
      

      'laptop': {'max': '1023px'},
      

      'tabs': {'max': '767px'},
     

      'mobile': {'max': '639px'},
    
    },
  },
  plugins: [],
}
