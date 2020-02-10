//myInfo.js
//获取应用实例
const app = getApp()
Page({
  data: {
    yesdPrice:'26',
    totalPrice:' 150',
    sellData:[
      {
        jynum:"1522266555555",
        time:'2019-02-22',
        pfmoney:60
      },
      {
        jynum: "1522266555555",
        time: '2019-02-12',
        pfmoney: 20
      },
      {
        jynum: "1522266555555",
        time: '2019-12-30',
        pfmoney: 50
      },
      {
        jynum: "15222665545444",
        time: '2018-12-12',
        pfmoney: 20
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
  toInfo:function(e){
    wx.navigateTo({
      url: 'lpInfo/lpInfo'
    }) 
  },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: '我的理赔' })
  }
});