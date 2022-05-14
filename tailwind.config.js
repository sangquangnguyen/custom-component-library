module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        typo: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
          disabled: "var(--color-text-disabled)",
        },
        primary: {
          default: "var(--color-primary)",
          100: "var(--color-primary-100)",
          300: "var(--color-primary-300)",
          500: "var(--color-primary-500)",
          700: "var(--color-primary-700)",
        },
        secondary: {
          default: "var(--color-secondary)",
          100: "var(--color-secondary-100)",
          300: "var(--color-secondary-300)",
          500: "var(--color-secondary-500)",
          700: "var(--color-secondary-700)",
        },
        success: {
          default: "var(--color-success)",
          100: "var(--color-success-100)",
          300: "var(--color-success-300)",
          500: "var(--color-success-500)",
          700: "var(--color-success-700)",
        },
        error: {
          default: "var(--color-error)",
          100: "var(--color-error-100)",
          300: "var(--color-error-300)",
          500: "var(--color-error-500)",
          700: "var(--color-error-700)",
        },
      },
    },
  },
  plugins: [],
};
