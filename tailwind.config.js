const colors = require("tailwindcss/colors");

module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
  // },
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    colors: {
      lime: colors.lime,
      gray: colors.gray,
      white: `#ffffff`,
    },
  },
};
