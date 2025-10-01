import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx,js}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      tailwindcss: {
        // Recognize common classnames helpers
        callees: ['cn', 'classnames', 'clsx'],
      }
    },
    rules: {
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1
        }
      ],
      // Disallow mixing tabs and spaces; keep indentation consistent
      'no-mixed-spaces-and-tabs': 'error',
      // Disallow trailing spaces
      'no-trailing-spaces': 'error',
      // Statement padding rules
      'padding-line-between-statements': [
        "error",
        // always require a blank line after directives (e.g., 'use strict')
        { "blankLine": "always", "prev": "directive", "next": "*" },
        { "blankLine": "any", "prev": "directive", "next": "directive" },
        // blank line before return
        { "blankLine": "always", "prev": "*", "next": "return" },
        // blank line around control blocks (if, for, while, switch, try)
        { "blankLine": "always", "prev": "*", "next": ["if", "for", "while", "switch", "try"] },
        { "blankLine": "always", "prev": ["if", "for", "while", "switch", "try"], "next": "*" },
        // blank line between imports and the rest of the code
        { "blankLine": "always", "prev": "import", "next": "*" },
        { "blankLine": "any", "prev": "import", "next": "import" },
        // blank line before exports
        { "blankLine": "always", "prev": "*", "next": "export" },
        // blank line before function and class declarations
        { "blankLine": "always", "prev": "*", "next": ["function", "class"] },
        { "blankLine": "always", "prev": ["function", "class"], "next": "*" }
      ],
      // Disallow multiple consecutive empty lines
      'no-multiple-empty-lines': [
        'error',
        { max: 1, maxBOF: 0, maxEOF: 0 }
      ],
      semi: ['error', 'always']
    }
  },
]);
