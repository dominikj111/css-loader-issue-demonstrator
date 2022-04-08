const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const config = {
	entry: {
		main: "./src/index.js",
	},
	output: {
		path: path.resolve(__dirname, "./build"),
		publicPath: "/",
		filename: "[name].bundle.js",
		library: "[name]bundle",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				type: "javascript/auto",
				exclude: [/node_modules/],
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.css$/,
				type: "javascript/auto",
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
				],
			},
			{
				test: /\.(ttf|eot|woff|svg)$/,
				type: "asset/resource",
				generator: {
					publicPath: `${process.env.projectpath}/build/`,
					filename: "assets/fonts/[name][ext]",
				}
			},
		],
	},
	resolve: {
		extensions: [".js"],
	},
};

module.exports = config;
