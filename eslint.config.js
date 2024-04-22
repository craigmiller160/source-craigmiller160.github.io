import config from '@craigmiller160/js-config/configs/eslint/eslint.config.mjs';

export default [
	...config,
	{
		files: ['**/*.{js,ts,jsx,tsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					paths: [
						{
							name: 'antd',
							message:
								'Please use more detailed import: antd/es/XYZ'
						}
					]
				}
			]
		}
	}
];
