//index.js
//获取应用实例
const weapp = require('../../utils/weapp-qrcode.js')
const app = getApp()

Page({
  data: {
    active:0,
    topNews:[
      {
        pic:'../../img/home_img_1.png',
        title:"互联网场景保险 融合生活多维空间"
      },
      {
        pic: '../../img/home_img_2.png',
        title: "保险起源贸易 太保服务贸易"
      }
      
    ],
    hjPrice: "10.00",
    yesdPrice: "11.00",
    autoplay:true,
    interval:2000,
    duration:300,
    indicatorDots:false,
    showrole:false,
    "newData": [{
      "pic": "../../img/home_img_3.jpg",
      "title": "海南橡胶收到保险赔款6244.8万元",
      "text": "公告，2018年11月1日至2018年11月30日期间，因价格波动触",
      "time": "2019-04-12"
    },
    {
      "pic": "../../img/home_img_4.jpg",
      "title": "千里驰援！太保这项创新，解了海南胶农心头大患",
      "text": "天然橡胶是我国重要的战略物资，如果胶价低迷，则会挫伤了胶农",
      "time": "2019-02-22"
    },
    {
      "pic": "../../img/home_img_5.jpg",
      "title": "中国太保落地海南保亭橡胶“保险+期货”精准扶贫",
      "time": "2019-02-10",
      "text": "日前，中国太保产险海南分公司与浙江分公司共同推进的海南省保"
    },
    {
      "pic": "https://inews.gtimg.com/newsapp_ls/0/8716938182_294195/0",
      "title": "海胶新资讯在海胶集团财务总监王劲的率队下,在海胶集团财务总监王劲的率队下",
      "text": "海胶集团领导干部大接访大下访、金竹加工分公司、金晨加工分公司开展活动",
      "time": "2018-08-06"
    }
  ],
    issure:false,
    hasshow:false,
    showewmPic: false,
    ewmPic: '',
    role:1
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 
  onChange(e){
    console.log(e);
    wx.miniProgram.redirectTo({url: '/path/to/me'})
    // wx.miniProgram.switchTab({
    //     url:'/pages/index/index',
    //     success: function(){
    //       console.log('success')
    //     },
    //     fail: function(){
    //       console.log('fail');
    //     },
    //     complete:function(){
    //       console.log('complete');
    //     }
    //  }) 
  },
  roleChange: function (e){
    var self = this;
    this.setData({ issure: true, role: e.detail})
    // console.log(self.data.role)
  },
  showcho: function (e){
    console.log(111666)
    this.setData({ hasshow: true })
    
  },
  getrole:function(e){
    let self = this;
    console.log(e);
    console.log(self.data.role,"PPPPP");
    app.globalData.roletype = self.data.role;
    this.setData({ showrole : true , })
    console.log(app.globalData.roletype, "ches" ); 
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  scode: function () {
    let self = this;
    console.log("扫一扫");
    wx.scanCode({
      success: (res) => {
        console.log(res);
        wx.navigateTo({
          url: '../me/sjrorder/sjrorder'
        })
      }
    })
  },
  showEwm: function () {
    console.log(1166)
    this.drawImg();
  },
  drawImg: function () {    
    var imgData = weapp.drawImg(
      {
        typeNumber: 4,
        errorCorrectLevel: 'M',
        size: 500
      })
    console.log(imgData, "pppppp")
    this.setData({
      ewmPic: imgData,
      showewmPic: true
    })


  },
  closeewm: function () {
    this.setData({
      showewmPic: false
    });
    wx.navigateTo({
      url: '../me/confirmPrice/confirmPrice'
    })
  },
  tomap:function(){
    wx.navigateTo({
      url: 'map/map'
    })
  },
  toseting: function () { 
    console.log("0000");
    wx.switchTab ({
      url: '../setting/setting'
    });
    this.setData({ showewmPic :false})
  },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: '首页' });
    // if (app.globalData.userInfo) {
    //   console.log(app.globalData.userInfo, "app.globalData.userInfo");
    //   this.setData({        
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }

    // wx.request({
    //   url: 'localhost:8080/index.json', //仅为示例，并非真实的接口地址
    //   data: {},
    //   header: {
    //       'content-type': 'application/json' // 默认值
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //   }
    // })

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
