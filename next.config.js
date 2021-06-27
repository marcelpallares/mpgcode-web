const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { i18n } = require("./next-i18next.config");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  i18n,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    //Copy files from posts and move them to the public folder
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, "posts"),
            to: path.join(__dirname, "public/posts"),
            globOptions: {
              ignore: ["**/*.mdx"],
            },
          },
        ],
      })
    );

    return config;
  },
});
