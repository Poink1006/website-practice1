/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-gray": "#0f0f0f", // Replace with your custom color code
      },
    },
  },
  plugins: [],
};
