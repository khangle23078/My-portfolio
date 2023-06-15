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
        purple100: 'rgba(152, 69, 232, 1)',
        blue100: 'rgba(51, 210, 255, 1)',
        pink100: 'rgba(221, 87, 137, 1)',
      },
      fontFamily: {
        Inter: 'Inter',
        Walsheim: 'GT Walsheim Pro'
      },
      borderWidth: {
        DEFAULT: '1px'
      }
    },
  },
  plugins: [],
}

