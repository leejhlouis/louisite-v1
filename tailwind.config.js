module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xs': '360px',
      'xs2': '414px',
      'xs': '480px',
      sm: '640px',
      md: '768px',
      'md2': '960px',
      lg: '1024px',
      'lg2': '1058px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif']
      },
      colors: {
        'gray-1000': 'rgb(6, 16, 29)',
      },
      spacing: {
        '15': '3.75rem',
        '1/10': '10%',
        '3/20': '15%',
      },
      keyframes: {
        bounce: {
          '0%, 100%' : { 
            transform: 'translateY(-15%)'
          },
        },
        pulse: {
          '50%': { 
            opacity: '.75' 
          },
        },
      },
      width: {
        '1/8': '12.5555555%',
        '7/8': '87.5555555%',
      },
    },
  },
  variants: {
    extend: {
    }
  },
  plugins: [],
}