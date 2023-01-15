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
    'max-len': 'off',
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
      }],
    'no-shadow': 'off', // https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
    '@typescript-eslint/no-shadow': ['error'],
    'no-param-reassign': 'off', // KeyNavigate: resultConds[i] = true;
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
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
