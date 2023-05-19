const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],
  publicPath : '',
  outputDir: 'dist',

  pluginOptions: {
    cordovaPath: 'src-cordova',
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
