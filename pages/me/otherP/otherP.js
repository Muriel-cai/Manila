//myInfo.js
//获取应用实例
const app = getApp()
Page({
  data: {
    yesdPrice:'26',
    totalPrice:' 150',
    otherData:[
      { 
        num:'20190425123222',
        typep:'农户',
        name:'王军',
        phone:13774256548,
        time:'2019-03-23'
      },
      {
        num: '20190425123225',
        typep: '收胶人',
        name: '白静',
        phone: 15874256522,
        time: '2019-03-01'

      }
    ]
  },
  bindPickerChange: function (e) {
    var choName = this.data.xbylist[e.detail.value]
    this.setData({
      xbyname: choName,
      hasxby:true
    })
  },
  bindDateChange: function (e) {   
    this.setData({
      zzTime: e.detail.value
    })
  }, 
  tohelpO:function(e){
    wx.navigateTo({
      url: '../logup/logup?detail= 1'
    }) 
  },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: '协助详情' })
  }
});