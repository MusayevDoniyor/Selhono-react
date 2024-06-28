/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        dmserif: ["DM Serif Display", "serif"],
        jost: ["Jost", "sans-serif"],
      },

      backgroundImage: {
        "bg-image": "url(/homePage-img.png)",
        "bg-image2": "url(/servicePage-img.png)",
        "bg-image3": "url(/projectPage-img.png)",
      },

      colors: {
        color1: "#CDA274",
        color2: "#4D5053",
        color3: "rgba(41, 47, 54, 1);",
      },

      boxShadow: {
        shadow1: "0 10px 20px 0 rgba(192, 192, 192, 0.35)",
      },

      borderRadius: {
        radius1: "100px 0 100px 0",
      },
    },
  },
  plugins: [],
};
