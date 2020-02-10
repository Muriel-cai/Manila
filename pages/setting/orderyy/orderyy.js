//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    jynum:"1514166645655",
    jyprice:"500"
  },
  // 
  onChange(e){
   
  },
  
  onLoad: function () {
    wx.setNavigationBarTitle({ title: '异议订单' });
    

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  fqxz:function (){
    wx.navigateTo({
      url: '../orderInfo/orderInfo'
    })
  }
})
