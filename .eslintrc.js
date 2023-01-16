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
    indent: ['error', 2],
    '@typescript-eslint/no-var-requires': 0,
    // 'no-multiple-empty-lines': ['error', { max: 1 }],
    'import/no-extraneous-dependencies': 0,
    'max-len': 'off',
    'vue/no-v-html': 0,
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'off',
    // hamed
    quotes: 'warn',
    'no-shadow': 'off', // https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
    '@typescript-eslint/no-shadow': ['error'],
    'lines-between-class-members': 'warn',
    'keyword-spacing': 'warn',
    'space-before-blocks': 'warn',
    'key-spacing': 'warn',
    'no-trailing-spaces': 'warn',
    'space-infix-ops': 'warn',
    'arrow-spacing': 'warn',
    'arrow-body-style': 'warn',
    'comma-spacing': 'warn',
    'semi-spacing': 'warn',
    'no-plusplus': 'warn', // line:208 KeyNavigate return ++this.k_curOrd;
    'brace-style': 'warn',
    'no-else-return': 'warn',
    'no-param-reassign': 'off', // line:46 KeyNavigate resultConds[i] = true;
    'prefer-destructuring': 'warn',
    'object-curly-spacing': 'warn',
    'padded-blocks': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    'one-var-declaration-per-line': 'warn',
    'no-multiple-empty-lines': 'warn',
    'one-var': 'warn',
    camelcase: 'warn',
    semi: 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'eol-last': 'warn',
    'no-cond-assign': 'warn', // line:305 KeyNavigate if ((findx = this.k_findKeyDown(key, true)) > -1) {
    'prefer-const': 'warn',
    'consistent-return': 'warn',
    'func-names': 'warn', // https://eslint.org/docs/latest/rules/func-names
    'no-console': 'warn',
    // hamed
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }],
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
