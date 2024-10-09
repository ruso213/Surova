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
        'white-bone':'#F0EDDE',
        'white-boneDark':'#D7D5C6',
        'white-low':'#EDEAE3',
        'gray-bone': '#BAB3A1',
        'green-olive': '#898C72',
        'dark-olive': '#454931'
      }
    },
  },
  plugins: [],
};
