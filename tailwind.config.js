module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif']
      }
    },
    screens: {
      'xs': '480px',
      sm: '640px',
      md: '768px',
      'md2': '960px',
      lg: '1024px',
      'lg2': '1058px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}