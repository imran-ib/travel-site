module.exports = {
	entry: {
		app :"./app/assets/scripts/app.js",
		vendor: "./app/assets/scripts/vendor.js"
	},
	output: {
	path: __dirname + '/app/temp/scripts',
		filename: "[name].js"
	},
	module: {
		loaders:[
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node-modules/
			}
		]
	}
}

