// eslint.config.js
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

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
            'import': importPlugin,
        },
        rules: {
            // ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            'no-console': 'error',
            'import/order': [
                'error',
                {
                    'groups': [
                        'builtin', // Node.js 内置模块
                        'external', // 第三方依赖
                        'internal', // 项目内部（别名 @/）
                        'parent', // 父级目录 ../
                        'sibling', // 同级目录 ./
                        'index', // 当前目录的 index 文件
                    ],
                    'pathGroups': [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: 'react-dom',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: 'react-router*',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            // 外部库类型
                            pattern: '{**}',
                            group: 'external',
                            patternOptions: { matchBase: true },
                            position: 'after',
                        },
                        {
                            pattern: '@zhifou/**',
                            group: 'external',
                            position: 'after',
                        },
                        {
                            pattern: '@/**',
                            group: 'internal',
                        },
                    ],
                    'pathGroupsExcludedImportTypes': [], // 避免重复分组
                    'alphabetize': { order: 'asc', caseInsensitive: true },
                    'newlines-between': 'always',
                },
            ],
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
            'import/order': [
                'error',
                {
                    'groups': [
                        'builtin', // Node.js 内置模块
                        'external', // 第三方依赖
                        'internal', // 项目内部（别名 @/）
                        'parent', // 父级目录 ../
                        'sibling', // 同级目录 ./
                        'index', // 当前目录的 index 文件
                    ],
                    'pathGroups': [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: 'react-dom',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: 'react-router*',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            // 外部库类型
                            pattern: '{**}',
                            group: 'external',
                            patternOptions: { matchBase: true },
                            position: 'after',
                        },
                        {
                            pattern: '@zhifou/**',
                            group: 'external',
                            position: 'after',
                        },
                        {
                            pattern: '@/**',
                            group: 'internal',
                        },
                    ],
                    'pathGroupsExcludedImportTypes': [], // 避免重复分组
                    'alphabetize': { order: 'asc', caseInsensitive: true },
                    'newlines-between': 'always',
                },
            ],
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
