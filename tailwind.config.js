module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#004643",
        secondary: "#abd1c6",
        btn: "#f9bc60",
      }),
      textColor: {
        primary: "#fffffe",
        secondary: "#001e1d",
        danger: "#e3342f",
        btn: "#001e1d",
        btnTwo: "#f9bc60",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
