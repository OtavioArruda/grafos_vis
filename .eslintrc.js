module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'plugins': [
        '@stylistic/js'
    ],
    'extends': 'eslint:recommended',
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        '@stylistic/js/max-len': ['error', { 'code': 80 }],
        '@stylistic/js/switch-colon-spacing': 'error',
        '@stylistic/js/indent': ['error', 4, { 'SwitchCase': 1 }],
        '@stylistic/js/no-trailing-spaces': 'error'
    }
};
