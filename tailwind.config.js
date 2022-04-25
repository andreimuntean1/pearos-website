module.exports = {
  content: [
    "./pages/**/*.jsx",
    "./components/**/*.jsx",
  ],
  theme: {
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
      '2xl': {'max': '1536px'}
    },
    extend: {
      colors: {
        'light-gray': '#a9a9aa',
        'dark-gray': '#1a1a1a',
        'caribbean-green': '#44ffd2'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}