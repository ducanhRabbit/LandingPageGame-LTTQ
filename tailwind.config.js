/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxxl':'1600px',
      'xxl': '1400px',
      'xl': '1279px',
      'lg': '1023px',
      'md': '769px',
      'sm': '639px',
      'xs': '477px'
    },
    fontFamily: {
      gothic: ["League Gothic"],

    },
    extend: {
      keyframes:{
        wave:{
          '0%': {"mask-position":'150% 0px'},
          '100%': {"mask-position":'0% 0px'}
        }
      }
    },
  },
  plugins: [],
}
