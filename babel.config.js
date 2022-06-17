module.exports = {
  presets: [
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        components: './src/screens/components',
        theme: './src/theme',
        cache: './src/cache',
        utils: './src/utils',
        assets: './assets',
        services: './src/services',
        actions: './src/actions'
      }
    }]
  ],
  env: {
    production: {
      plugins: [
        'transform-remove-console'
      ]
    }
  }
}
