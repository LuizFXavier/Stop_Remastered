const path = require("path")

module.exports = {
    mode: "production",
    entry: './public/TS/main.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'stonpers.js',
      path: path.resolve(__dirname,'public', 'JS'),
    },
  };
  