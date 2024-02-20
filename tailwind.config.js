/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: "3rem",
        h1r: "2rem",
        h2: "2.5rem",
        h2r: "1.7rem",
        h3: "2.2rem",
        h3r: "1.5rem",
        h4: "2rem",
        h4r: "1.4rem",
        h5: "1.8rem",
        h5r: "1.3rem",
        h6: "1.5rem",
        h6r: "1.1rem",
      },
      colors: {
        primary: "var( --primary-color)",
        secondary: "var(--secondary-color)",
        danger: "var(--danger-color)",
        dark: "var(--dark)",
        white: "var(--white)",
        "bg-color": "var(--bg-color)",
        "bg-container": "var(--bg-container)",
      },
    },
  },
  plugins: [],
};
