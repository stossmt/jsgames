import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'no-duplicate-imports': 'warn',
      'no-var': 'warn',
      'prefer-const': [
        'warn',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
      'prefer-template': 'warn',
      'no-console': 'off',
    },
  },
]);
