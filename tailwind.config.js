module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Geist", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "monospace"]
      },
      colors: {
        pastelBlue: "#b3c7ff",
        pastelPink: "#ffb3d6",
        pastelPurple: "#e0bbff",
        pastelTeal: "#b3fff0"
      }
    }
  },
  plugins: []
};
