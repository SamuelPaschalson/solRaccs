/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#FD6E6A",
        customYellow: "#FFC600",
      },
      backgroundImage: {
        "gradient-orange-yellow":
          "linear-gradient(135deg, #FD6E6A 0%, #FFC600 100%)",
      },
    },
  },
  plugins: [],
};
