/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx}",
  // ],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
  ],
 
  theme: {
    // colors: {
    //   'primary': {
    //     light: '#6ddbc7',
    //     DEFAULT:'#bb980f',
    //     dark: '#0a5749',
    //   },
    //   'dark':{
    //     light: '#7A7A7A',
    //     DEFAULT: '#414a53',
    //     dark: '#222222',
    //   }
    // },
    // fontFamily: {
    //   primary: ['Graphik', 'sans-serif'],
    //   body: ['Merriweather', 'serif'],
    // },
    extend: {}
  },
  plugins: [],
}