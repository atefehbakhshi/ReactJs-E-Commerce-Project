/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 0px 1px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
