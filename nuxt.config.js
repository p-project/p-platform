module.exports = {
  plugins: ['~plugins/vue-filter', '~plugins/i18next'],
  build: {
    extend (config) {
      config.module.rules.push(
        {
          test: /\.yml$/,
          loader: 'yml-loader'
        }
      )
    },
    vendor: ['axios']
  },
  router: {
    middleware: ['translation']
  }
}
