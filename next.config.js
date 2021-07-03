const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const CopyPlugin = require("copy-webpack-plugin");
const { i18n } = require("./next-i18next.config");

if (!process.env.BUILD_ENV) {
  console.error("Error: Sorry, you must specify BUILD_ENV");
  process.exit(10);
}

const envPath = `./env.${process.env.BUILD_ENV}`;

if (!fs.existsSync(envPath)) {
  console.error("Error: The .env file does not exist --> ", path);
  process.exit(11);
}

dotenv.config({ path: envPath });

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
