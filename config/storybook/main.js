module.exports = {
  stories: ['../../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', 'storybook-tailwind-dark-mode'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        // Filter out the default .css rule.
        ...config.module.rules.filter((rule) => rule.test !== /\.css$/),
        // Add our own css rule which in turn will read the postcss.config.js from project root.
        {
          test: /\.css1$/,
          exclude: [/\.module\.css$/, /@storybook/],
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1, sourceMap: false },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: false,
              },
            },
          ],
        },
      ],
    },
  }),
};
