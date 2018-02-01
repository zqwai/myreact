const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {

	entry: {
		app: './app/index.js'
	},

	devtool: 'inline-source-map',  //js 报错追踪
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),  //清除dist文件夹下文件
		new HtmlWebpackPlugin({  
			title: 'webpack react app',
			template: './app/index.tpl.hbs',
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
    ],
	output:{
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {

		rules: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, "app")
				],
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: {
					presets: ['es2015', 'react']
				},
			},
			{
			    test: /\.styl$/,
				include: [
					path.resolve(__dirname, "app")
				],
				exclude: /(node_modules|bower_components)/,
			    loader: 'style-loader!css-loader!stylus-loader',
		    }

		]
	}
};
