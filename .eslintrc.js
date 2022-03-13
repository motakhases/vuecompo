module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    indent: ['error', 2],
    '@typescript-eslint/no-var-requires': 0,
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'import/no-extraneous-dependencies': 0,
    'max-len': ['error', { code: 180 }],
    'vue/no-v-html': 0,
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'off',
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
