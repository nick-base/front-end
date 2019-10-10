module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  pages: {
    index: {
      entry: 'src/main.js',
      template: process.env.NODE_ENV === 'development'
        ? 'public/index-dev.html'
        : 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: (config) => {
    config.externals(
      process.env.NODE_ENV === 'development'
        ? {}
        : {
          'vue': 'Vue',
          'vue-router': 'VueRouter',
          'vuex': 'Vuex',
          'axios': 'axios'
        })
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
