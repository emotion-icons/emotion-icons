module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    production: {
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
    development: {
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  },
}
