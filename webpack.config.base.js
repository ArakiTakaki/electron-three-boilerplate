const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {Parameters<typeof webpack>[0][0]} */
const main = {
  name: 'main',
  entry: {
    main: path.resolve('src/main.ts'),
  },
  target: 'electron-main',
  output: {
    path: path.resolve('out'),
    filename: '[name].js',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
};

/** @type {Parameters<typeof webpack>[0][0]} */
const renderer = { 
  name: 'renderer',
  entry: {
    renderer: path.resolve('src/renderer.ts')
  },
  target: 'web',
  output: {
    path: path.resolve('out'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
  plugins: [
    new HtmlPlugin({template: path.resolve('src/index.html'), inject: false})
  ],
}

module.exports = [
  renderer,
  main,
];
