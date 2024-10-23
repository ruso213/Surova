const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#222326',
        'white-low': '#F9F9F9',
        'gray-low': '#BFBFBF',
        'gray-notlow': '#e2e6e6',
        'gray-medium': '#e5e5e5',
        'gray-dark': '#A6A6A6',
        'gray-hiperdark': '#595959',
        'gray-brawn': '#BBB9B5',
      },
      boxShadow:{
        'perso': '4px 4px 7px 3px rgba(0, 0, 0, 0.1);',
        'bottom': '7px 2px 9px 0px rgba(0, 0, 0, 0.1);'
      }
    },
  },
  plugins: [],
};
