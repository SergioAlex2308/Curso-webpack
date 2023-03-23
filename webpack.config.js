const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	/* Aquí indicamos el elemento inicial de nuestra app.
	O sea, nuestro punto de entrada */
	entry: './src/index.js',

	/* Ahora indicamos cual va a ser el archivo de salida,
	donde va a estar todo el código que compile */
	output: {
		/* Aquí indicamos donde queremos que se guarde el proyecto */
		path: path.resolve(__dirname, 'dist'),
		/* Y colocamos el nombre del .js que va guardar */
		filename: 'main.js',
	},

	/* Vamos a indicar con extensiones vamos a trabajar en
	este proyecto */
	resolve: {
		/* Importante pasar las extensiones con las que vamos a
		trabajar, como .jsx (React.js)  */
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css|.styl$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'stylus-loader'
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin(),
	]
}