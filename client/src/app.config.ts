export default {
  pages: [
    'pages/component/index',
    'pages/index/index',
    'pages/user/index',
    'pages/component/button-demo/index',
    'pages/component/cell-demo/index',
    'pages/component/icon-demo/index',
    'pages/component/switch-demo/index',
    'pages/component/overlay-demo/index',
    'pages/component/checkbox-demo/index',
  ],
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
