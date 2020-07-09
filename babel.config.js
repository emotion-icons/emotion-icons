module.exports = {
  plugins: ['@babel/plugin-transform-runtime', 'babel-plugin-emotion'],
  env: {
    legacy: {
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            bugfixes: true,
            targets: {ie: '11'},
          },
        ],
      ],
    },
    modern: {
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
        [
          '@babel/preset-modules',
          {
            bugfixes: true,
            modules: false,
            targets: {esmodules: true},
          },
        ],
      ],
    },
  },
}
