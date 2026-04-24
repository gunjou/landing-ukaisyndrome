/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#d1dfec",
        "biru-gelap": "#081e35",
        "custom-merah": "#a6282b",
        "custom-biru": "#1c80f0",
      },
    },
  },
  plugins: [],
};
