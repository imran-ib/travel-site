module.exports = {
	entry: "./app/assets/scripts/app.js",
	output: {
	path: __dirname + '/app/temp/scripts',
		filename: "app.js"
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

// module.exports = 
// 	{
//     context: "/app",
//     entry: "./app/assets/scripts/app.js",
//     output: {
//         path: require("/app/temp/scripts"),
//         filename: "bundle.js"
//     }

// }