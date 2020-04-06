const moment = require('moment');
const glob = require("glob");

const getChildren = function(root_path, sub_path) {
  dirs = glob.sync(root_path + sub_path + "/*").map(path => {
    //Remove root_path
    path = path.slice(root_path.length + sub_path.length + 1);
    return path;
  });

  json = dirs.map(dir => {
    files = glob
      .sync(root_path + sub_path + (dir ? `/${dir}` : "") + "/**/*.md")
      .map(path => {
        //Remove root_path and dir
        path = path.slice(root_path.length + 1);
        // Remove "README", making it the de facto index page
        if (!path.endsWith("README.md")) {
          return path;
        }
      })
      .filter(notUndefined => notUndefined !== undefined);
    return {
      title: dir,
      collapsable: false,
      children: files
    };
  });

  return json;
};

module.exports = {
  title: "WingCH's Notes",
  description: "My study record ~",
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代碼塊顯示行號
  },
  themeConfig: {
    nav: [{ text: "GitHub", link: "https://github.com/WingCH/notes" }],
    sidebar: getChildren("docs", "/content"),
    lastUpdated: 'Last Updated'
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-162896978-1'
      }
    ],
    [
      "vuepress-plugin-google-adsense",
      {
        ad_client: "ca-pub-8973860766338464" // replace it with your ad_client
      }
    ]
  ]
};
