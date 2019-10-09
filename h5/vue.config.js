module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  chainWebpack: (config) => {
    config.externals({
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
