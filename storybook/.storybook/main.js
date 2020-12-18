const {DllReferencePlugin} = require('webpack')

module.exports = {
  stories: ['../stories/**/*.stories.js'],

  webpackFinal: async (base, {configType}) => {
    return {
      ...base,
      resolve: {
        ...base.resolve,
        alias: emotionless(base.resolve.alias),
      },
      module: {
        ...base.module,
      },
      plugins: base.plugins.map((plugin) => {
        if (plugin instanceof DllReferencePlugin) {
          const {name, content} = require(plugin.options.manifest)
          return new DllReferencePlugin({
            context: plugin.options.context,
            name,
            content: emotionless(content),
          })
        } else {
          return plugin
        }
      }),
    }
  },
}

function emotionless(object, predicate) {
  let result = {}
  for (key in object) {
    if (!/emotion/.test(key)) {
      result[key] = object[key]
    }
  }
  return result
}
