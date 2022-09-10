const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    //entry point for files
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      //output for the bundles
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      //webpack-plugin generates the html files
      new HtmlWebpackPlugin({
        //creates a copy of the the index.html file in the ./dist folder and inserts a script tag in bundle.js
        template: './index.html',
        title: "Jate Text Editor"
      }),
      //injects our custom service worker
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: './src-sw.js'
      }),
      new WebpackPwaManifest({
        //provides the pwa options when offline
        fingerprints: false,
        inject: true,
        display: 'standalone',
        name: 'Jate',
        short_name: 'jate',
        description: 'Just Another Text Editor',
        background_color: '#272822',
        theme_color: '#31a9e1',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      })
      
    ],

    module: {
      //css loaders
      rules: [
        {
          //this code also looks for a .css file and adds it into the bundle.js file
          test: /\.css$/,  
          // additional modules for converting the css into js
          use: ['style-loader', 'css-loader'],  
        },
        {
          // searches for image files with these extensions
          test: /\.(png|svg|jpg|jpeg|gif)$/i, 
          type: 'asset/resource'
        },
        {
          // looks for .js files
          test: /\.m?js$/,  
          // ignores these files
          exclude: /(node_modules|bower_components)/,  
          use: {
            // babel converts ECMAScript 2015+ to make it  compatible with older browsers
            loader: 'babel-loader', 
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
