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
				exclude: [/node_modules/],
				use: [
					{
						loader: "babel-loader",
					},
				],
				type: "javascript/auto",
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
				],
				type: "javascript/auto",
			},
			{
				test: /\.svg$/,
				loader: "svg-inline-loader",
				type: "javascript/auto",
			},
			{
				test: /\.(ttf|eot|woff)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "assets/fonts/[name].[ext]",
						publicPath: `${process.env.projectpath}/build/`,
					},
				},
				type: "javascript/auto",
			},
		],
	},
	resolve: {
		extensions: [".js"],
	},
};

module.exports = config;
