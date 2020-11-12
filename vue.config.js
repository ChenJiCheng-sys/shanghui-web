module.exports = {
  lintOnSave: false,
  // proxy: {
  //   '/api': {
  //     target: 'http://192.168.8.147:9000',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '/api': ''
  //     }
  //   }
  // },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {}, // css预设器配置项
    requireModuleExtension: true // 启用 CSS modules for all css / pre-processor files.
  }
}
