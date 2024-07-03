// app.js
App({
  onLaunch(options) {
    console.log('冷启动-场景值',options.scene)
    console.log('分享:',options)
    wx.getSystemInfo({
      success: (res) => {
        console.log(res,res.platform);
        this.globalData.platform = res.platform;
        this.globalData.statusBarHeight = res.statusBarHeight;
        this.globalData.screenWidth = res.screenWidth;
        this.globalData.screenHeight = res.screenHeight;
        //头部整体高度：状态栏高度+导航栏高度----
        const custom = wx.getMenuButtonBoundingClientRect();
        const navigationBarHeight =
          custom.height + (custom.top - res.statusBarHeight) * 2;
        const navAllHeight = navigationBarHeight + res.statusBarHeight;
        this.globalData.navAllHeight = navAllHeight;
        this.globalData.navigationBarHeight = navigationBarHeight;
        //获取底部安全区域高度
        const bottomSafeHeight = res.screenHeight - res.safeArea.bottom;
        this.globalData.bottomSafeHeight = bottomSafeHeight;
        //更新本地存储，重新进入小程序
        wx.setStorageSync("enterTimes", 0);
        console.log('初次进入+重新渲染',wx.getStorageSync('enterTimes'));
      },
    });
  },
  onShow(options) {
    // 热启动时执行的代码
    console.log('热启动-场景值：', options.scene)
    console.log('分享:',options)
  },
  globalData: {
    userInfo: null,
    baseURL: "https://cn1.shangcengvip.cn",
    // baseURL: 'https://cn.shangcengvip.com',
    statusBarHeight: 0,
    bottomSafeHeight: 0, //底部安全区域高度
    navAllHeight: 0, //头部整体高度
    navigationBarHeight: 0, //将囊栏高度
    screenWidth: 0, //屏幕宽度
    screenHeight: 0, //屏幕高度
    platform: ''
  }
})
