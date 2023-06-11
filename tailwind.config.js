/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        fontSize: {
          "xs": "9px",
          "sm": "12px",
          "base": "14px",
          "lg": "16px",
          "xl": "18px",
          "2xl": "20px",
        },
        borderRadius: {
          "none": "0",
          "sm": "4px",
          "default": "8px",
          "md": "12px",
          "lg": "14px",
          "full": "9999px",
        },
        padding: {
          xs: "4px",
          sm: "8px",
          base: "12px",
          lg: "16px",
          xl: "20px",
        },
        colors: {
          blue: "#1C44AC",
          blue200: "#00389320",
          red: "#DC143C",
          red200: "#DC143C20",
          light: "#f7f7f7",
          dark: "#222222",
          border: "#14141515",
          borderDark: "#14141530",
          lightPlus: "#eeeeee",
          darkPlus: "#141415",
          white: "#ffffff",
          black: "#000000",
        },
        extends: {
          width: {
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "1": "100%",
          },
          height: {
            "1": "100%",
          }
        }
    },
    plugins: [],
  };