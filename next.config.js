require('dotenv').config();
const withImages = require('next-images');

module.exports = withImages({
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 3000,
  },
  webpack(config) {
    // Rules for handling SASS/SCSS files
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader', // Inject CSS into the DOM
        'css-loader',   // Translate CSS into CommonJS
        'sass-loader',  // Compile SASS/SCSS to CSS
      ],
    });

    // Your existing webpack customizations go here

    return config;
  },
});
