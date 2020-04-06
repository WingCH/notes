module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-75630254-2' // UA-00000000-0
      }
    ]
  ]
};
