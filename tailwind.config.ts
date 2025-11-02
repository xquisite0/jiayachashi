import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Traditional Singaporean coffee shop colors
        'kopitiam': {
          50: '#faf8f3',
          100: '#f5f0e6',
          200: '#e8ddc7',
          300: '#d9c6a3',
          400: '#c9ad7f',
          500: '#b89560',
          600: '#a67d4d',
          700: '#8b6640',
          800: '#725438',
          900: '#5e4631',
        },
        'kopi': {
          50: '#f9f5f0',
          100: '#f0e6d9',
          200: '#e0ccb3',
          300: '#cfaf88',
          400: '#be925d',
          500: '#a8753e',
          600: '#8d5f32',
          700: '#744d2a',
          800: '#5e3f24',
          900: '#4d3420',
        },
        'jade': {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd1ad',
          400: '#5ab686',
          500: '#359a67',
          600: '#267d52',
          700: '#1f6443',
          800: '#1b5037',
          900: '#17422f',
        },
      },
    },
  },
  plugins: [],
};

export default config;
