const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {index: 1,url: '../../images/swiper/swiper1.png',bj: '/images/swiper/swiper1.png'},
      {index: 2,url: '../../images/swiper/swiper2.png',bj: '/images/swiper/swiper2.png'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     //1:接收全局数据
     const {
      baseURL,
      screenWidth,
      statusBarHeight,
      navigationBarHeight,
      bottomSafeHeight,
      navAllHeight,
      screenHeight,
    } = app.globalData;
    this.setData({
      baseURL,
      screenWidth,
      statusBarHeight,
      navigationBarHeight,
      bottomSafeHeight,
      navAllHeight,
      screenHeight,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onShareTimeline: function () {
    console.log('////')
  }
  
})