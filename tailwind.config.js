module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: {
          100: "#f87171",
          200: "#424242",
          300: "#f25555",
        },
        facebook: "#3A5795",
        instagram: "#E84832",
        gmail: "#d11934",
        whatsapp: "#43BF53",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        navIn: "navIn 0.6s ease-out",
        navOut: "navOut 0.4s linear",
      },
      keyframes: {
        navIn: {
          "0%": {
            left: "100%",
          },
          "70%": {
            left: "0",
          },
          "90%": {
            left: "20px",
          },
          "100%": {
            left: "0",
          },
        },
        navOut: {
          from: {
            left: "0",
          },
          to: {
            left: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
