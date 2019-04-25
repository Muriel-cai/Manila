//sjrorder.js
//获取应用实例
const app = getApp()
Page({
  data: {
    peoplename:"张三",
    peopleplace:"海南省厦门市同安村"
  },
  onload:function(){

  },
  combtn:function(e){
    let self = this;
    console.log(16666)
    wx.switchTab({
      url: '../me'
    })
  }
 
});