export default {
  pages: ['pages/component/index', 'pages/index/index', 'pages/user/index'],
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
        pagePath: 'pages/component/index',
        text: 'Component',
      },
      {
        pagePath: 'pages/user/index',
        text: 'User',
      },
    ],
  },
  cloud: true,
};
