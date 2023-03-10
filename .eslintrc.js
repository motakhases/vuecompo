module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['prettier'],
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'max-len': 'off',
    'import/no-extraneous-dependencies': 0,
    'vue/no-v-html': 0,
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)', '**/src/**/*.test.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
      },
    },
  },
};
