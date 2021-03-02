const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",

    domains: [
      {
        domain: "mpgcode.com",
        defaultLocale: "en",
      },
      {
        domain: "mpgcode.es",
        defaultLocale: "es",
      },
    ],
  },
  localePath: path.resolve("./locales"),
};
