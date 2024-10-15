// eslint.config.js
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    {
        ignores: ['node_modules', 'dist', 'public'],
    },

    /** js推荐配置 */
    eslint.configs.recommended,

    /** ts推荐配置 */
    ...tseslint.configs.recommended,

    /** ESLint Stylistic 自定义配置 */
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: true,
        jsx: true,
        braceStyle: '1tbs',
        arrowParens: false,
        commaDangle: 'only-multiline',
    }),

    /**
     * javascript 规则
     */
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        settings: { react: { version: '18.3' } },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            'no-console': 'error',
        },
    },

    /**
     * typescript 规则
     */
    {
        files: ['**/*.{ts,tsx}'],
        settings: { react: { version: '18.3' } },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // ...tseslint.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },

    /**
     * 配置全局变量
     */
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                /** 追加一些其他自定义全局规则 */
                wx: true,
            },
        },
    },
];
