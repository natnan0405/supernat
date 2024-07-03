// pages/demo/demo.js
import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible: false,

  },
  //-- action
  handleAction() {
    ActionSheet.show({
      theme: ActionSheetTheme.List,
      selector: '#t-action-sheet',
      context: this,
      items: [
        {
          label: '选项一',
        },
        {
          label: '选项二',
        },
        {
          label: '选项三',
        },
        {
          label: '选项四',
        },
      ],
    });
  },
  showDescAction() {
    ActionSheet.show({
      theme: ActionSheetTheme.List,
      selector: '#t-action-sheet',
      context: this,
      description: '动作面板描述文字',
      items: [
        {
          label: '选项一',
        },
        {
          label: '选项二',
        },
        {
          label: '选项三',
        },
      ],
    });
  },
  showIconAction() {
    ActionSheet.show({
      theme: ActionSheetTheme.List,
      selector: '#t-action-sheet',
      context: this,
      items: [
        {
          label: '选项一',
          icon: 'app',
        },
        {
          label: '选项二',
          icon: 'app',
        },
        {
          label: '选项三',
          icon: 'app',
        },
        {
          label: '选项四',
          icon: 'app',
        },
      ],
    });
  },
  handleSelected(e) {
    console.log(e.detail);
  },
  //-- 
  handleClick() {
    this.setData({ visible: true });
  },
  handleOverlayClick(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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