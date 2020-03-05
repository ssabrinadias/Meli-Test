const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("babel-polyfill");


module.exports = {
	entry: {
		index: ["babel-polyfill", path.resolve("./app/src/index.js")]
	},
	output: {
		filename: "principal.js",
		path: __dirname + "app/dist"
	},
	devServer: {
		contentBase: __dirname + "app/dist",
        port: 3000,
        historyApiFallback: true
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			minify: {
				html5: true,
				collapseWhitespace: true,
				removeComments: true
			},
			filename: "index.html",
			template: __dirname + "/main.html"
		})
    ],
    module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	}
};
