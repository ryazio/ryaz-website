module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/function-component-definition': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': [
      'warn', { ignore: ['history', 'push', 'match', 'children'] },
    ],
    'linebreak-style': 0,
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
