/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],  // Adjust this to match your project structure
  theme: {
    extend: {
      colors: {
        "tomato": 'hsl(4, 100%, 67%)',
        "dark-slate-grey": 'hsl(234, 29%, 20%)',
        "charcoal-grey": 'hsl(235, 18%, 26%)',
        "grey": 'hsl(231, 7%, 60%)',
      },
      backgroundImage: {
        'gradient-hover': 'linear-gradient(90deg, rgba(255,82,123,1) 0%, rgba(255,106,58,1) 60%)',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'], // Replace 'Roboto' with the actual font used in the design
      },
    },
  },
  plugins: [],
}