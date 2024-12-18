import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_back_hero' : "url('../assets/back1.png')",
    },
    extend: {
      colors: {
      'primary-green' : '#9ab899',
      'back-green' : '#e2e8e1',
      'light-green' : '#abd2aa',
      'primary-gray' : '#33303E',
      'second-gray' : '#4E4B59',
      'gray-phone' :'#F1f1f1',
      'txt-gray' : '#7A7786',
      'opacity-gray' : 'rgba(100, 80, 57, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
