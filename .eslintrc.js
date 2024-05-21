module.exports = {
  root: true,
  extends: '@react-native',
  ignorePatterns: ['gql.ts', 'graphql.ts', 'fragment-masking.ts', 'index.js', '.eslintrc.js', 'metro.config.js'],
  overrides: [
    {
      files: ['src/**/*.{ts,tsx,js,jsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      // rules: {
      //   '@typescript-eslint/explicit-function-return-type': 'off',
      //   '@typescript-eslint/no-unused-vars': 'warn',
      // },
    },
  ],
};
