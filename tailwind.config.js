module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'openSans': ['"Open Sans"', 'sans-serif'],
      'poppins': ['"Poppins"', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      gridTemplateColumns: {
        'customised-col': '1fr 2fr'
      },
      colors: {
        arsenic : '#2F333F'
      },
      backgroundColor: {
        arsenic : '#2F333F'
      }
    },
  },
  plugins: [],
}
