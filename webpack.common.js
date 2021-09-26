const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		polyfills: "./src/js/polyfills.js",
		shared: {
			import: "./src/js/entry.ts",
			dependOn: ["polyfills"],
		},
	},
	output: {
		filename: "js/[name].bundle.js",
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
	},
	resolve: {
		fallback: {
			crypto: require.resolve("crypto-browserify"),
			stream: require.resolve("stream-browserify"),
			buffer: require.resolve("buffer/"),
		},
		extensions: [".ts", ".tsx", ".js", ".pcss"],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].styles.css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.m?(j|t)sx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-typescript"],
						plugins: ["@babel/plugin-proposal-class-properties"],
					},
				},
			},
			// {
			// 	test: /\.js/,
			// 	use: ["source-map-loader"],
			// 	enforce: "pre",
			// },
			{
				test: /\.p?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: false,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: false,
							postcssOptions: {
								plugins: [require("tailwindcss")("./tailwind.config.js"), require("autoprefixer")],
							},
						},
					},
				],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|webp|mp4)$/,
				loader: "url-loader",
				options: {
					limit: 2048,
				},
			},
		],
	},
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			minSize: 20000,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all",
				},
				main: {
					test: /[\\/]assets[\\/]js[\\/]/,
					name: "main",
					chunks: "all",
				},
			},
		},
	},
};
