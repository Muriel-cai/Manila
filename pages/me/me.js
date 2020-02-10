//me.js
//获取应用实例
const weapp = require('../../utils/weapp-qrcode.js')
const app = getApp()
import Dialog from '../../dist/dialog/dialog';
Page({
  data: {
    userpic:'https://inews.gtimg.com/newsapp_ls/0/8693933918_580328/0',
    username:"张成",
    phoneNum:"18757235648",
    type:1,
    showewmPic:false,
    ewmPic:'',
    isjn: 2
  },
  // 
  onChange(e){
    console.log(e.detail,"55555555")
  },
  tomyInfo:function(){
    wx.navigateTo({
      url: 'myInfo/myInfo'
    }) 
  },
  tomylp:function(){
    wx.navigateTo({
      url: 'mylp/mylp'
    }) 
  },
  togxt:function(){
    wx.navigateTo({
      url: 'relevance/relevance'
    }) 
  },
  tohelp:function(){
    wx.navigateTo({
      url: 'otherP/otherP'
    }) 
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: '个人中心' }); 
    this.setData({ isjn: app.globalData.roletype });  
    console.log(this.data.isjn, app.globalData.roletype,"-ppp")   
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
    });
    wx.navigateTo({
      url: 'confirmPrice/confirmPrice'
    }) 
  },
  toseting: function () {
    console.log("0000");
    wx.switchTab({
      url: '../setting/setting'
    });
    this.setData({ showewmPic: false })
  },
  scode:function(){
    let self = this;
    console.log("扫一扫");
    
    wx.scanCode({
      success: (res) => {
        console.log(res);
        if (this.data.isjn == 3) {
          wx.navigateTo({
            url: 'confirmPrice/confirmPrice'
          });

        } else {
          wx.navigateTo({
            url: 'sjrorder/sjrorder'
          })
        }
        
//  var result = res.result;

        // self.setData({
        //   result: result,

        // })


      }
    })
  }

})
