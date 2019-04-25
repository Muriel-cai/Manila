//me.js
//获取应用实例
const weapp = require('../../utils/weapp-qrcode.js')
const app = getApp()
import Dialog from '../../dist/dialog/dialog';
Page({
  data: {
    userpic:'https://inews.gtimg.com/newsapp_ls/0/8693933918_580328/0',
    username:"张三",
    phoneNum:"123456789955",
    todayPrice:"500",
    type:1,
    showewmPic:false,
    ewmPic:''
  },
  // 
  onChange(e){
    console.log(e.detail,"55555555")
  },

  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {  
    Dialog.confirm({
       title: '提示',
       message: '您还未注册，请前往注册'
     }).then(() => {
       // on confirm;
       wx.navigateTo({
        url: 'logup/logup'
      })
     }).catch(() => {
       // on cancel
       console.log("返回")
       wx.switchTab({
        url: '../index/index'
      })
    });
  },
  showEwm:function(){
    console.log(1166)
   
    this.drawImg();
  },
  drawImg: function () {
    console.log(this.data.username);
     var ewmData = {
      name: this.data.username ,
      phone: this.data.phoneNum
    }
    var imgData = weapp.drawImg(
      this.data.username,
      {
      typeNumber: 4,
      errorCorrectLevel: 'M',
      size: 500
    })
    console.log(imgData,"pppppp")
    this.setData({
      ewmPic: imgData,
      showewmPic : true
    })
  

  },
  closeewm:function(){
    this.setData({
      showewmPic: false
    })
  },
  tooreder:function(e){
   let self = this;
    wx.navigateTo({
      url: 'setting/setting'
    })
  },
  scode:function(){
    let self = this;
    console.log("扫一扫");
    wx.scanCode({
      success: (res) => {
        console.log(res)
//  var result = res.result;

        // self.setData({
        //   result: result,

        // })


      }
    })
  }

})
