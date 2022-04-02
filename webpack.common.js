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
				oneOf: [
					{
						test: /\.(js|jsx)$/,
						exclude: [/node_modules/, /\.test.js$/, /__mocks__/],
						use: [
							{
								loader: "babel-loader",
							},
						],
					},
					{
						test: /\.(js|mjs)$/,
						use: [
							{
								loader: "babel-loader",
								options: {
									babelrc: false,
									configFile: false,
									compact: false,
									presets: [
										[require.resolve("babel-preset-react-app/dependencies"), { helpers: true }],
									],
									cacheDirectory: true,
									cacheCompression: false,
									sourceMaps: true,
									inputSourceMap: true,
								},
							},
						],
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "assets/images/[name].[ext]",
						publicPath: "/build/",
					},
				},
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
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader",
					},
				],
			},
			{
				test: /\.svg$/,
				loader: "svg-inline-loader",
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "assets/fonts/[name].[ext]",
						publicPath: `${process.env.projectpath}/build/`,
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {},
	},
};

module.exports = config;
