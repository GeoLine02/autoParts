/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "orange-500": "#FFA500",
        "blue-600": "#2868D5",
        "gray-100": "#F7F8FA",
        "gray-700": "#7E807F",
        "gray-200": "#E8EBEF",
        "soft-white": "#FBFBFE",
      },
    },
  },
  plugins: [],
};
