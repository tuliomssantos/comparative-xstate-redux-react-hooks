const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const title = 'Webpack 5'

module.exports = {
	entry: './src/index.js',

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		chunkFilename: '[id].[chunkhash].js',
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					// publicPath: "example-some-s3-bucket"
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|git|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'assets/[path][name].[ext]',
				},
			},
		],
	},
	optimization: {
		splitChunks: {
			// include all types of chunks
			chunks: 'all',
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title,
			inject: 'body',
			scriptLoading: 'defer',
			favicon: 'favicon.ico',
			meta: {
				viewport: 'width=device-width, initial-scale=1.0',
			},
			template: 'template.html',
		}),
	],
}
