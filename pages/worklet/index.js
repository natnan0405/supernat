// pages/hotel/index.js



const headImg = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fd064be90-6b8c-4a6d-9721-837206fbb4a7%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696759051&t=b90e0bf861e41c30214fc739ae66343f'

const hotels = [
  'https://res.cngoldres.com/upload/2017/1011/30b836444f0411260a0afe76ea9576af.jpg',
  'https://x0.ifengimg.com/ucms/2021_04/C63B2D16D69D691EDC7D8C31E299988487E2C3C5_size144_w1080_h1402.jpg',
  'https://img2.baidu.com/it/u=2362882516,1616341177&fm=253&fmt=auto&app=138&f=JPEG?w=855&h=500'
]

const genList = (num) => {
  const ans = []
  for (let i = 0; i < num; i++) {
    ans.push({
      id: i,
      img: hotels[(i % hotels.length)]
    })
  }
  return ans
}

const { shared, Easing } = wx.worklet

const lerpColor = (begin, end, t) => {
  'worklet'
  const r = begin.r + (end.r - begin.r) * t
  const g = begin.g + (end.g - begin.g) * t
  const b = begin.b + (end.b - begin.b) * t
  const a = begin.a + (end.a - begin.a) * t
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const { windowHeight } = wx.getSystemInfoSync()
const menuRect = wx.getMenuButtonBoundingClientRect()
const sheetHeight = windowHeight - (menuRect.bottom + menuRect.height + 60)

const Curves = {
  easeInCubic: Easing.cubicBezier(0.55, 0.055, 0.675, 0.19)
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuRect,
    sheetHeight,
    minSize: 0.5,
    maxSize: 0.85,
    headImg,
    list: genList(10),
    latitude: 23.099994,
    longitude: 113.324520,
    tablist: ['酒窖','厨房','客厅','SPA区','游泳池','儿童游戏','吧台'],
    active: 2
  },

  onSizeUpdate(e) {
    'worklet'
    const distance = sheetHeight - e.pixels
    this.progress.value = distance >= 20 ? 1 : distance / 20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const progress = shared(1)

    this.applyAnimatedStyle('.inner-circle', () => {
      'worklet'
      let t = progress.value
      const scale = 1 - 0.2 * t
      return {
        transform: `scale(${scale})`
      }
    })


    this.applyAnimatedStyle('.outer-circle', () => {
      'worklet'
      let t = progress.value
      return {
        opacity: t,
      }
    })

    this.applyAnimatedStyle('.search', () => {
      'worklet'
      const t = progress.value
      const beginColor = {
        r: 241, 
        g: 233, 
        b: 233,
        a: 1
      }

      const endColor = {
        r: 255,
        g: 255,
        b: 255, 
        a: 1
      }

      const spreadRadius = -6 + 8 * t
      const bgColor = lerpColor(beginColor, endColor, t)
      
      return {
        backgroundColor: `${bgColor}`,
        boxShadow: `0px 0px 6px ${spreadRadius}px rgba(0, 0, 0, 0.12)`
      }
    })

    this.applyAnimatedStyle('.search-wrp', () => {
      'worklet'
      const t = progress.value
      return {
        backgroundColor: `rgb(245, 242, 241, ${1 - t})` 
      }
    })

    this.applyAnimatedStyle('.indicator', () => {
      'worklet'
      const t = progress.value
      return {
        opacity: t
      }
    })

    this.progress = progress
  },
})