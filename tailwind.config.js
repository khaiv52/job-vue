export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Popins", "sans-serif"],
      },
      gridTemplateComlumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
