//myInfo.js
//获取应用实例
const app = getApp()
Page({
  data: {
    lptime:"2019-02-22",
    lpmoney:'60',
    sjname:'李元',
    username:'张成',
    insurance:'18757235648',
    jynum:'1522266555555',
    jyTime:'2018-02-22',
    place:'海南省海口市同安村',
    ratioR: "50",
    ratioM: "30",
    ratioG: '20',
    totalmoney: "500"
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
  onChange:function(e){
    this.setData({ checked: e.detail });
  },
 
 
  onLoad: function () {
    wx.setNavigationBarTitle({ title: '理赔详细信息' })
  }
});