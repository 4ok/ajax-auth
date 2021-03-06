module.exports = {
	presets: [
		'@babel/preset-react',
		'@babel/preset-env',
	],
	plugins: [
		[ 'import', {
			libraryName: 'antd',
			libraryDirectory: 'es',
			style: 'css',
		}],
		[ '@babel/plugin-proposal-decorators', { legacy: true }],
		[ '@babel/plugin-proposal-class-properties', { loose: false }],
	],
}
