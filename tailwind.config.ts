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
      'primary-blue' : '#33cdbb',
      'primary-orange' : '#EC7000',
      'primary-gray' : '#33303E',
      'second-gray' : '#4E4B59',
      'gray-phone' :'#F4F4F4',
      'txt-gray' : '#7A7786',
      'opacity-gray' : 'rgba(100, 80, 57, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;