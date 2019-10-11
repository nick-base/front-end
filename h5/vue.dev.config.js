module.exports = {
  outputDir: 'dist',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'index-dev.html',
      filename: 'index.html'
    }
  },
  devServer: {
    proxy: {
      '/debug': {
        target: 'http://127.0.0.1:8089',
        ws: true,
        pathRewrite: {
          '^/debug/api': '/api'
        }
      },
      '/api': {
        target: 'http://127.0.0.1:8089',
        ws: true
      }
    }
  }
}
