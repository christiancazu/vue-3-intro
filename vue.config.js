module.exports = {
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .test(/\.vue$/)
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.emitWarning = true
        return options
      })
      .end()
  }
}
