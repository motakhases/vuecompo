module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'max-len': ['error', { code: 180 }],
    'vue/no-v-html': 0,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '**/src/**/*.test.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
