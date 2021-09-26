const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	cache: {
		type: "filesystem",
		buildDependencies: {
			config: [
				__filename,
				path.resolve(__dirname, "./webpack.common.js"),
				path.resolve(__dirname, "./tsconfig.json"),
			],
		},
	},
	plugins: [
		// new PurgecssPlugin({
		// 	paths: () => glob.sync([
		// 			"www/**/*.php",
		// 			"src/**/*.{php,html,ts}",
		// 			"!src/php/vendor",
		// 	], {nodir: true}),
		// }),
	],
	optimization: {
		minimize: true,
	},
});
