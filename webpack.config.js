const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, 'src'),	//改变该目录以下所有的绝对路径
	entry: './js/index.js',						//入口文件
	output: {
		path: path.resolve(__dirname, 'dist'),	//出口文件路径
		publicPath: '/static/',					//服务器上的路径名称
		filename: 'bundle.js'					//出口文件
	},
	module: {		//模块
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			},
			// {
			// 	test: /\.jsx?$/,
			// 	exclude: /node_modules/,
			// 	loader: 'react-hot!babel'
			// },
			{
				enforce:'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				// loaders: ['babel-loader', 'eslint-loader']
				loader: 'eslint-loader'
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.less$/, loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
			}
		]
	},
	devServer: {
		contentBase: "./src",
		port: "2333",
		inline: true,
		hot: true,
		historyApiFallback: true,
	},
	//eslint配置
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				eslint: {
					configFile: './.eslintrc.js'
				},
			}
		})
	]

}
