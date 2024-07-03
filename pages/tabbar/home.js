// pages/tabbar/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    share_path: '',
    collect: false
  },

  tap() {
    this.createSelectorQuery().select("#view")
      .node().exec(res => {
        const node = res[0].node
        
        // 保存海报
        node.takeSnapshot({
          type: 'arraybuffer',
          format: 'png',
          success: (res) => {
            const f = `${wx.env.USER_DATA_PATH}/hello.png`
            const fs = wx.getFileSystemManager();
            
            // 将海报数据写入本地文件
            fs.writeFileSync(f, res.data, 'binary')
            console.log('???',f)
            
            this.setData({
              share_path: f
            })
            
            // 把海报图片保存到本地
            wx.saveImageToPhotosAlbum({
              filePath: f
            })
          }
        })
      })
  },

  shareFunc() {
    const $this = this;
    // wx.showShareImageMenu({
    //   path: $this.share_path, // 分享的图片路径
    // })
    wx.showShareMenu({
      withShareTicket: true,
      success: function() {
        wx.shareAppMessage({
          title: '分享图片给好友',
          imageUrl: $this.share_path, // 分享的图片路径
          success: function(res) {
            console.log('分享成功', res);
          },
          fail: function(err) {
            console.error('分享失败', err);
          }
        });
      },
      fail: function(err) {
        console.error('显示分享菜单失败', err);
      }
    });
    
  },

  changeSc() {
    this.setData({
      collect: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.tap();
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