module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'unused-imports', 'eslint-plugin-no-inline-styles', 'jira-ticket-todo-comment', 'simple-import-sort'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-var': 'error', // no usar var
    'eqeqeq': 'error', // usar ===
    'no-debugger': 'error', // no usar debugger
    'no-console': 'error', // no usar console.log
    'max-lines': ['error', 200], // maximo 200 lineas por archivo
    'complexity': ['error', 20],
    'no-magic-numbers': 'error', // es dura la regla. No hay para strings
    'no-new-wrappers': 'error', // no usar new String, new Number, etc
    'max-params': ['error', 3],
    "no-inline-styles/no-inline-styles": "error", // no usar estilos inline
    "no-nested-ternary": "error", // no usar ternarios anidados
    "jira-ticket-todo-comment/jira-ticket-todo-comment": ["error", { "projectKey": "METV4", "message": "Añada un número de ticket de JIRA al comentario TODO (por ejemplo, // TODO METV4-1234 [comentario])" }],
    // adicional
    "no-dupe-else-if": "error", // no usar else if duplicados
    "no-unused-vars": "off",  // variables sin usar
    // 'unused-imports/no-unused-imports': 'error', // imports sin usar
    'arrow-body-style': ['error', 'as-needed'], // si es una sola linea, no necesita llaves 
    'react/self-closing-comp': ['error', { component: true, html: true }], // si es un componente, debe cerrarse <Componente /> en vez de <Componente></Componente>
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    '@typescript-eslint/consistent-type-imports': 'error', // importar los tipos de forma consistente

    "simple-import-sort/imports": "error",

  },
  overrides: [
    {
      files: ['src/**/*.@(ts|tsx)'],
      rules: {
        '@typescript-eslint/naming-convention': ['error', ...require('./config/naming-convention')]
      }
    },
    {
      files: ['src/**/*.@(ts|tsx)'],
      rules: {
        "simple-import-sort/imports": ["error", ...require('./config/import-sort')],
      },
    },
  ]
}