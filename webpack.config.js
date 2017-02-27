var path = require('path');
module.exports = {
entry: './app/app.js',
output:{
	path:path.join(__dirname,'build'),
	filename:'bundle.js'
},
module:{
	loaders:[
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query:{
				presets: ['es2015','react']
			}
		},
		{
			test:/\.(png|jpg|gif)$/,
			loader:'url-loader?limit=8192'
		},
		{
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        	],
      	},
        {
        test: /\.useable\.css$/,
        use: [
          { 
            loader: "style-loader",
            options: {
              useable: true
            },
          },
          { loader: "css-loader" }
          ]
		}
		]
	}
}

