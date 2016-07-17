var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
      path: "./public",
      filename: "bundle.js"
  },
  module: {
    loaders: [
	    {
	    	test: /\.scss$/,
	    	loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
	    }
    ]
	},
  plugins: [
  	new ExtractTextPlugin("bundle.css")
  ]
}