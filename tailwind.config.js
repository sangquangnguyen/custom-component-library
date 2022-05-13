module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#3b82f6",
          100: "#dbeafe",
          300: "#93c5fd",
          500: "#3b82f6",
          700: "#1d4ed8",
        },
        secondary: {
          default: "#a855f7",
          100: "#f3e8ff",
          300: "#d8b4fe",
          500: "#a855f7",
          700: "#7e22ce",
        },
        success: {
          default: "#22c55e",
          100: "#dcfce7",
          300: "#86efac",
          500: "#22c55e",
          700: "#15803d",
        },
        error: {
          default: "#ef4444",
          100: "#fee2e2",
          300: "#fca5a5",
          500: "#ef4444",
          700: "#b91c1c",
        },
      },
    },
  },
  plugins: [],
};
