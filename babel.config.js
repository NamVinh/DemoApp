module.exports = {
	presets: ['babel-preset-expo', 'module:@react-native/babel-preset'],
	plugins: [
		'nativewind/babel',
		[
			'module-resolver',
			{
				root: ['./'],
				extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
				alias: {
					navigation: './src/navigation',
					assets: './assets',
					screens: './src/screens',
					containers: './src/containers',
					components: './src/components',
					contexts: './src/contexts',
					configs: './src/configs',
					services: './src/services',
					store: './src/store',
					translations: './src/translations',
					types: './src/types',
					theme: './src/theme',
					utils: './src/utils',
					hooks: './src/hooks',
					'@lib': './lib',
				},
			},
		],
		[
			'module:react-native-dotenv',
			{
				moduleName: '@env',
			},
		],
	],
};
