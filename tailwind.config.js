const colors = require("tailwindcss/colors");

module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
  // },
  theme: {
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },
    colors: {
      rose: colors.rose,
      white: "#fffff",
    },
  },
};
