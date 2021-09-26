const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = merge(common, {
	mode: "development",
	plugins: [new WebpackNotifierPlugin()],
	optimization: {
		minimize: false,
	},
	devtool: "eval-cheap-module-source-map",
});
