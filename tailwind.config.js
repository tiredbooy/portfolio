// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(45deg, var(--primary), var(--secondary))",
      },
    },
  },
  plugins: [],
};
