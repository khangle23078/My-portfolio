/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greyText: '#F0F0F0',
        blueBold: '#6CACE4',
        dark: '#111111',
        gradiant: 'linear-gradient(89.81deg, #9845E8 -1.72%, #33D2FF 54.05%, #DD5789 99.78%);',
      },
      fontFamily: {
        Inter: 'Inter',
        Walsheim: 'GT Walsheim Pro'
      }
    },
  },
  plugins: [],
}

