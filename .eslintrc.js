module.exports = {
    "extends": "airbnb-base",
    "env": {
        'node': true,
        'mocha': true
      },
    'rules': {
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'camelcase': 'off',
        'class-methods-use-this': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'no-trailing-spaces': 'off',
        'arrow-body-style': 'off',
        'arrow-parens': 'off',
        'padded-blocks': 'off',
        'no-caller': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',
        'no-use-before-define': 'off',
        'no-useless-escape': 'off',
        'no-prototype-builtins': 'off',
        'no-param-reassign': 'off',
        'no-restricted-properties': 'off',
        'no-console': 'off',
        'max-len': 'off',
    },
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module',
    },
};