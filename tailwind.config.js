/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4f8ff7",
          200: "#008CFF",
          500: "#3981f6",
        },
        indigo: {
          950: "#2F2B43",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-font-inter"),
    require("tailwindcss-dotted-background"),
  ],
};
