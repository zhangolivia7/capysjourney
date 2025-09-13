/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "clothing-shadow": "var(--clothing-shadow)",
        "face-accessory": "var(--face-accessory)",
        pet: "var(--pet)",
      },
    },
  },
  plugins: [],
};