module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '35px': '35px',
        '50px': '50px',
      },
      height: {
        '35px': '35px',
        '50px': '50px',
      },
      maxHeight: {
        '1/2': '50%',
      },
      minWidth: {
        '1/4': '25%',
      },
      maxWidth: {
        '1/4': '25%',
      },
      margin: {
        '50px': '50px',
      },
      padding: {
        '50px': '50px',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['hover', 'group-hover'],
    },
  },
  plugins: [],
};
