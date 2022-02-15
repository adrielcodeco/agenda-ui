module.exports = {
  root: true,
  extends: ['eslint-config-onhand'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}