module.exports = {
  root: true,
  extends: '@react-native',
  ignorePatterns: ['gql.ts', 'graphql.ts', 'fragment-masking.ts', 'index.js', '.eslintrc.js', 'metro.config.js'],
  overrides: [
    {
      files: ['src/**/*.{ts,tsx,js,jsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'prettier'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            trailingComma: 'all',
            bracketSpacing: true,
            tabWidth: 2,
            printWidth: 80,
            arrowParens: 'avoid',
            bracketSameLine: true,
          },
        ],
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
