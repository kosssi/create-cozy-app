'use strict'

const webpack = require('webpack')
const appConfig = require('./config.js')

const compiler = webpack(Object.assign({}, appConfig, {
  bail: true
}))

// add a way to provide success callback for (at least) better tests
module.exports = (successCallback) => {
  compiler.run((err, stats) => {
    if (err) {
      console.error(err)
      return
    }

    console.log(stats.toString({
      chunks: false,  // Makes the build much quieter
      modules: false,
      colors: true    // Shows colors in the console
    }))

    if (typeof successCallback === 'function') successCallback()
  })
}
