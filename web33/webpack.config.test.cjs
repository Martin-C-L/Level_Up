// Contenido de: webpack.config.test.cjs
module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // --- AÑADIR ESTAS REGLAS ---
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // Desactiva la emisión de archivos en el build de prueba
              emitFile: false 
            }
          }
        ]
      }
      // --- FIN DE LAS NUEVAS REGLAS ---
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};