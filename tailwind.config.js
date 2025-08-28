/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,tsx,less,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",

        text: "var(--color-text)",
        muted: "var(--color-muted)",
        invert: "var(--color-invert)",

        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",

        "btn-bg": "var(--btn-bg)",
        "btn-text": "var(--btn-text)",
        "btn-hover": "var(--btn-hover)",

        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",

        "input-bg": "var(--input-bg)",
        "input-border": "var(--input-border)",
        "input-text": "var(--input-text)",
        "input-focus": "var(--input-focus)",
      },
    },
  },
  plugins: [],
}
