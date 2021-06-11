const path =require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports={
    entry:'./src/app/main.js',
    output:{
        path: path.join(__dirname, 'src/public'),
        filename: 'js/bundle.js'
    },
    devServer: {
        compress: true,
        port:4000
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                  loader: 'vue-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlwebpackPlugin({
            template:'./index.html',
            minify:{
                collapseWhitespace:true,
                removeComments:true,
                removeRedundantAttributes:true,
                removeScriptTypeAttributes:true,
                removeStyleLinkAttributes:true,
                useShortDoctype:true
            }
        }),
    ]
}