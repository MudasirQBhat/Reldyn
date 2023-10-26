/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#EE0979",
        "primary-background": "#F5F7FAEB",
        "secondary-color": "#717171",
        "line-color": "#D3D3D3",
        "color-black": "#4D4D4D",
        "color-white": "#FFF",
        "color-gray": "#EBEAED",
        "color-blackblue": "#1E0E62",
        "color-gray-card": "rgba(38, 50, 56, 0.10)",
        "color-dark-silver": "#DEE0E2",
        "color-darker-silver": "#89939E",
        "color-light-gray": "#D9D9D9",
        "color-neutral-silver": "#F5F7FA",
        "footer-background": "#263238",
        "bottom-footer-background": "#C20260",
        "color-light-pink": "#FFE6F2",
        "color-purple": "#1E095A",
        "color-gray-blue": "#ABBED1",
        "color-light-black": "#303030,",
        "color-white-gradient": "#EFEEEE",
        "color-gray-800": "#6B6B6B",
        "color-natural-gray": "#89939E",
        "color-natural-black": "#263238",
      },
      fontFamily: {
        roboto: ["Roboto", "sans"],
        inter: ["Inter", "sans"],
        sans: ['"DM Sans"', "sans"],
      },
      lineHeight: {
        12: "3rem",
        16: "4rem",
        20: "5rem",
      },
      fontWeight: {
        thin: "100",
        light: 300,
        extrabold: 800,
        black: 900,
        "font-600": 600,
        "font-700": 700,
      },
      width: {
        136: "48.5rem",
        120: "30rem",
      },
      height: {
        120: "30rem",
      },
      margin: {
        140: "-570px",
        160: "-610px",
      },
    },
  },
  plugins: [],
};
