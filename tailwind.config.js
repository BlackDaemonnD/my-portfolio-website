/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A192F',
        'secondary': '#112240',
        'accent': '#64FFDA',
        'slate-light': '#CCD6F6',
        'slate-dark': '#8892B0',
      },
    },
  },
  plugins: [],
};