var path= require('path');
var webpack= require('webpack');

module.exports = {
	entry: {
		Main: './index.js'
	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module:{
		rules:[
		{
			test: /\.js/,
			exclude: /node_modules/,
			use:{
				loader: 'babel-loader',
				options: {
					presets:['react']
				}
			}
		}
		]
	}
};