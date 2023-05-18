/*
 * @Date: 2023-05-18 12:53:22
 * @LastEditors: aei(imaei@foxmail.com)
 * @LastEditTime: 2023-05-18 12:53:29
 * @FilePath: \InspireHub\.eslintrc.cjs
 * @description: 
 */
module.exports = {
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': 'warn',
    },
  }
  