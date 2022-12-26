/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-black": "#25252E",
        "light-gray": "#F7F7F9",
        "light-gray-24": "rgba(110, 117, 138, 0.24)",
        "light-gray-600": "#EAEAEC",
        "blue-gray": "#6E758A",
      },
    },
  },
  plugins: [],
};
