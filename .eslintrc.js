module.exports = {
  'root': true,
  'extends': ['@nuxt/eslint-config'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'max-len': ['warn', { code: 120 }],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': 0,
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'eol-last': ['error', 'always']
  }
}
