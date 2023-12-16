import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        third: 'var(--third-color)',
        forth: 'var(--forth-color)',
        background: 'var(--background)',
        light: 'var(--light-color)',
        background_slider: 'var(--background-slider)',
        blue: 'var(--primary-blue)'
      },
      fontFamily: {
        aria_regular: ['aria_regular'],
        aria_normal: ['aria_normal'],
        aria_medium: ['aria_medium'],
        aria_sbold: ['aria_sbold'],
        aria_thin: ['aria_thin'],
        aria_ubold: ['aria_ubold'],
        aria_light: ['aria_light'],
        aria_heavy: ['aria_heavy'],
        aria_xlight: ['aria_xlight'],
        aria_xbold: ['aria_xbold'],
        aria_bold: ['aria_bold'],
        aria_black: ['aria_black']
      },
      fontSize: {
        calc_5vw: 'calc(5vw )',
        calc_10vw: 'calc(10vw )',
        calc_15vw: 'calc(15vw )',
        calc_20vw: 'calc(20vw )',


      },

    }
  },
  plugins: []
};
export default config;
