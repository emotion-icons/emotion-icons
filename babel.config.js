module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/proposal-object-rest-spread'],
  env: {
    es: {
      presets: [['@babel/preset-env', {modules: false}], '@babel/preset-react', 'minify'],
    },

    cjs: {
      presets: ['@babel/preset-env', '@babel/preset-react', 'minify'],
    },
    production: {
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
    development: {
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  },
}
