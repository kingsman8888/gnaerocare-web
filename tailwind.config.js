/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#003366', // 지앤에어로케어 짙은 남색
        'brand-light': '#4299E1', // 밝은 파란색
      }
    },
  },
  plugins: [],
}