//orderInfo.js
//获取应用实例
const app = getApp()
Page({
  data: {
    active: 0,
    ischange: true,
    peoplename: "张成",
    sgpeople: "李元",
    jynun:"20190203457955",
    jytime: "2018-12-12",
    jyplace: '福建省海口市同安村',
    validbd: "656655222220",
    totalmoney: "500",
    ratioR: "50",
    ratioM: "30",
    ratioG: '20',
    totalmoney: "500"
  },
  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  haschoise: function (e) {
    let self = this;

    this.setData({ ischange: false });
  },
  cancle: function () {
    let self = this;
    this.setData({ ischange: true });
  },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: '订单详情' })  
  },
  getUserInfo: function (e) {
    
  },
  toyy:function(){
    wx.navigateTo({
      url: '../orderyy/orderyy'
    })
  }
})
