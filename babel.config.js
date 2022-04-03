module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        "library": 'vant',
        "libraryDirectory": 'es',
        "style": true
      }, 'vant'
    ]
  ]
}
