// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}", // For App Router
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     // Add other paths if you have components in different directories
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     500: "#F89878",
      //   },
      //   secondary: {
      //     200: "#F1F9FF",
      //     500: "#0F88D9",
      //   },
      // },
      // backgroundImage: {
      //   "hero-bg": "url('/images/hero-bg.jpg')",
      // },
      // screens: {
      //   xs: "395px",
      //   smd: "500px",
      //   mdl: "900px",
      //   ...defaultTheme.screens,
      // },
    },
  },
  extend: {},
  plugins: [require("tailwind-scrollbar-hide")],
  plugins: [tailwindScrollbarHide],
};

export default config;
