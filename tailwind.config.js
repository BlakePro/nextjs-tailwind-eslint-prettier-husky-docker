module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {},
      width: {},
      colors: {
        app: {
          100: '#F2F1F5',
          200: '#FB7488',
          300: '#F05165',
          400: '#A73894',
          500: '#4E3064',
          600: '#303841',
          700: '#303841',
          800: '#303841',
          900: '#303841',
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['dark'],
      borderWidth: ['dark'],
    },
  },
  plugins: [],
};
