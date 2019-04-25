//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active: 0,
    "orserData": [
      {
        "code": "1514166645655",
        "sgname": "李四",
        "ratioG": "30%",
        'ratioR':'50',
        'ratioM':'30',
        "time": "2018-12-12",
        "totalmoney":'500'
      },
      {
        "code": "1514166645655",
        "sgname": "王五",
        "ratioG": "20%",
        'ratioR': '100',
        'ratioM': '90',
        "time": "2018-12-12",
        "totalmoney": '500'
      }
   
    ]
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 
  onChange(e) {
    console.log(e);
    wx.miniProgram.redirectTo({ url: '/path/to/me' })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
