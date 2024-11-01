import antfu from '@antfu/eslint-config';

export default antfu(
	{
		formatters: true,
		typescript: true,

		stylistic: {
			indent: 'tab',
			quotes: 'single',
			semi: true,
		},

		rules: {
			'import/order': 'off',
			'sort-imports': 'off',
			'unicorn/consistent-function-scoping': 'off',
			'antfu/consistent-list-newline': 'warn',
			'antfu/if-newline': 'off',
			'import/no-mutable-exports': 'off',
			'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'unused-imports/no-unused-vars': 'warn',
			'node/prefer-global/process': 'off',
		},

		ignores: [],
	},
);