// pages/like/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: 0,
    value: 0
  },
  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    this.setData({
      value: event.detail.value
    })
  },

  onStickyScroll(event) {
    console.log(event.detail);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {statusBarHeight} = getApp().globalData;
    this.setData({
      statusBarHeight
    })
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

  }
})