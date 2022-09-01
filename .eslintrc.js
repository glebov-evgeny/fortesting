module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true,
    },
    extends: 'eslint:recommended',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    'rules': {
        'quotes': [2, 'single'],
    },
};