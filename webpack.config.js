const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: ['> 0.5%', 'IE 8', 'iOS > 8', 'Safari > 8']
                  }
                }
              ]
            ],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  }
};
