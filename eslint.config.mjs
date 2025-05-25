import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
    rules: {
      semi: ['error', 'always'], // obriga ponto e vírgula
      quotes: ['error', 'single'], // obriga aspas simples
      indent: ['error', 2], // indentação de 2 espaços
      'no-console': 'warn', // alerta no uso de console.log
      eqeqeq: ['error', 'always'], // exige uso de === e !==
      curly: ['error', 'all'], // exige uso de {} mesmo em blocos de uma linha
    },
  },
]);
