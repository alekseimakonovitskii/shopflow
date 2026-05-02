import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: { ...globals.node },
    },
    extends: [
      tseslint.configs.recommended,
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);