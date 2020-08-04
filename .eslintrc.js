module.exports = {
    env: {
      es6: true,
      node: true,
      jest: true
    },
    extends: [
      'standard',
      'prettier'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module'
    },
    rules: {
      "prettier/prettier": "error"
    },
    plugins: [
      'prettier',
      'jest'
    ]
  }