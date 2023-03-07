/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '99': '99'
      }
    },
    textColor: {
      primary: 'blue',
      secondary: 'purple',
      white: "#FFF", 
      black: "#000",
    },
    colors: {
      'regal-blue':'#1756dd32'
    }
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["winter", "dark", "garden", "halloween"],
  },
}
