const postcss = require('rollup-plugin-postcss');

const images = require('@rollup/plugin-image');
//? a los plugins, agregamos images y postcss
module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ modules: true }),
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];
    return config;
  },
};
