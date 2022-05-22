module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default',
      path: __dirname,
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: 'node_modules',
          loader: 'babel',
          query: { presets: ['es2015'] },
        },
      ],
      rules: [
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'url-loader',
          options: {
            limit: Infinity, // everything
          },
        },
      ],
    },
    target: 'node',
    browser: {
      fs: false,
    },
    i18n: {
      locales: [
        {
          code: 'fa',
          file: 'fa-IR.js',
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'fa',
    },
  },
  pluginOptions: {
    i18n: {
      locales: [
        {
          code: 'fa',
          file: 'fa-IR.js',
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'fa',
    },
  },
  devServer: {
    axios: {
      proxy: true,
    },

    proxy: {
      '/api/': 'https://next.zarinpal.com',
    },

    env: {
      I18N_API: 'https://raw.githubusercontent.com/ZarinPal/Localisation/main',
    },
  },
};
