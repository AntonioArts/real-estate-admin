const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/App.jsx',

	output: {
		path: './public',
		filename: 'bundle.js'
	},

	devServer: {
		historyApiFallback: true,
		inline: true,
		contentBase: './public',
		port: 4040
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'react-hot-loader!babel-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			}
		]
	},

	// Preproduction style bundle
	// {
	//		test: /\.scss$/,
	// 	loader: ExtractTextPlugin.extract("style", "css!sass")
	// }
	// plugins: [
	// 	new ExtractTextPlugin("styles.css")
	// ],


	// CSS Modules
	//
	// {
	//		test: /\.css$/,
	// 	loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
	// }

	devtool: 'eval-source-map',

	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}