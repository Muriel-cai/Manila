//sjrorder.js
//获取应用实例
const app = getApp()
Page({
  data: {
    peoplename:"张成",
    peopleplace:"海南省海口市同安村"
  },
  
  combtn:function(e){
    let self = this;
    console.log(16666)
    wx.switchTab({
      url: '../me'
    })
  },
  onload: function () {
    wx.setNavigationBarTitle({ title: '海胶信息' });
  },
 
});