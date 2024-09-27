/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desk-chair": "url('/src/assets/deskwithchair.png')",
      },
      spacing: {
        "55vh": "60vh",
        "53vh": "53vh",
      },
      borderRadius: {
        llg: "2.5rem",
      },
      minHeight: {
        "55vh": "60vh",
      },
      width: {
        "167px": "167px",
      },
    },
  },
  plugins: [],
};
