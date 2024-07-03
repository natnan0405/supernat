Page({
  data: {
    screens: [
      { title: '标题1', description: '描述文字1', background: '#ccc' },
      { title: '标题2', description: '描述文字2', background: '#ddd' },
      { title: '标题3', description: '描述文字3', background: '#eee' }
    ],
    currentIndex: 0
  },

  onScroll: function (e) {
    const scrollTop = e.detail.scrollTop;
    const screenHeight = wx.getSystemInfoSync().windowHeight;
    const newIndex = Math.round(scrollTop / screenHeight);

    if (newIndex !== this.data.currentIndex) {
      this.setData({
        currentIndex: newIndex
      });
      this.triggerAnimation(newIndex);
    }
  },

  triggerAnimation: function (index) {
    const query = wx.createSelectorQuery();
    query.selectAll('.content').boundingClientRect();
    query.exec((res) => {
      const screen = res[0][index];
      if (screen) {
        wx.worklet.animate(
          {
            target: screen,
            keyframes: [
              { opacity: 0, transform: 'translateY(20px)' },
              { opacity: 1, transform: 'translateY(0)' }
            ],
            options: {
              duration: 500000,
              easing: 'ease-out',
              fill: 'forwards'
            }
          }
        );
      }
    });
  }
});
