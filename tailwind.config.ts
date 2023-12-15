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
        light: 'var(--light-color)'
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
      }
    }
  },
  plugins: []
};
export default config;
