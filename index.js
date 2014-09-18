var fs = require('fs')
var msx = require('mercury-jsx')

var installed = false

function install(options) {
  if (installed) return

  options = options || {}

  msx.transform('', options)

  require.extensions[options.extension || '.js'] = function(module, filename) {
    var src = fs.readFileSync(filename, {encoding: 'utf8'})
    if (typeof options.additionalTransform === 'function')
      src = options.additionalTransform(src)

    try {
      src = msx.transform(src, options)
    } catch (e) {
      throw new Error('Error transforming ' + filename + ' to JSX: ' + e.toString())
    }

    module._compile(src, filename)
  }

  installed = true
}

module.exports = {
  install: install
}
