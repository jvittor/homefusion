/* eslint-disable import/no-extraneous-dependencies */
import tailwindTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      black: {
        100: '#1C1C1E',
        200: '#71717A',
      },
      orange: '#FF5522',
      white: {
        100: '#FFFFFF',
        200: '#71717A',
      },
      blue: '#016FED',
    },
    extend: {
      backgroundImage: {
        'home-bg':
          "url('https://homefusion.s3.sa-east-1.amazonaws.com/Frame+1261153862.png')",
      },
    },
  },
  plugins: [tailwindTypography],
} satisfies Config;
