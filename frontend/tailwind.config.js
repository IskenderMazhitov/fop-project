// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#4597CB",
      }),
      flex: {
        '1': '1 1 0%',
        auto: '1 1 auto',
       initial: '0 1 auto',
       inherit: 'inherit',
        none: 'none',
       '2': '2 2 0%',
       '3': '3 3 0%',
       '4': '4 4 0%',
       '5': '5 5 0%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
