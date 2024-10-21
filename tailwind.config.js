/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BrightRed: "rgb(229, 9, 20)",
        DarkRed: "rgb(196, 31, 42)",
        BrightGray: "rgb(45, 45, 45)",
        LinkGray: "rgba(255, 255, 255, 0.7)",
        BordedGray: "#272727",
        FAQGray: "rgb(67, 66, 66)",
      },
      screens: {},
    },
  },
  plugins: [],
};
