export default {
  pages: ['pages/index/index', 'pages/about/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: 'Index',
      },
      {
        pagePath: 'pages/about/index',
        text: 'About',
      },
    ],
  },
  cloud: true,
};
