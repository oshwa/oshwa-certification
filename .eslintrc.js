module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  env: { browser: true, commonjs: true, es2018: true, jquery: true },
  parserOptions: {
    sourceType: 'module',
  }
};
