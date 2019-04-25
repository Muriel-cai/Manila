//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active:0,
    "newData": [{
      "pic": "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/Whf%3D180%2C140%2C50/sign=77a5d450a1c379315d3dd524dafc8769/91529822720e0cf3d89f58ad0446f21fbe09aa7f.jpg",
      "title": "海胶新资讯'",
      "text": "海胶集团领导干部大接访大下访活动小组,在海胶集团财务总监王劲的率队下,走进了金鸡岭分公司、金竹加工分公司、金晨加工分公司开展活动",
      "time": "2018-12-12"
    },
    {
      "pic": "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/Whf%3D180%2C140%2C50/sign=77a5d450a1c379315d3dd524dafc8769/91529822720e0cf3d89f58ad0446f21fbe09aa7f.jpg",
      "title": "海胶新资讯在海胶集团财务总监王劲的率队下,'",
      "text": "海胶集团领导干部大接访大下访活动小组,在海胶集团财务总监王劲的率队下,走进了金鸡岭分公司、金竹加工分公司、金晨加工分公司开展活动'",
      "time": "2018-12-12"
    },
    {
      "pic": "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/Whf%3D180%2C140%2C50/sign=77a5d450a1c379315d3dd524dafc8769/91529822720e0cf3d89f58ad0446f21fbe09aa7f.jpg",
      "title": "海胶新资讯在海胶集团财务总监王劲的率队下,在海胶集团财务总监王劲的率队下",
      "text": "海胶集团领导干部大接访大下访活动小组,在海胶集团财务总监王劲的率队下,走进了金鸡岭分公司、金竹加工分公司、金晨加工分公司开展活动",
      "time": "2018-12-12"
    },
    {
      "pic": "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/Whf%3D180%2C140%2C50/sign=77a5d450a1c379315d3dd524dafc8769/91529822720e0cf3d89f58ad0446f21fbe09aa7f.jpg",
      "title": "海胶新资讯",
      "text": "海胶集团领导干部大接访大下访活动小组,在海胶集团财务总监王劲的率队下,走进了金鸡岭分公司、金竹加工分公司、金晨加工分公司开展活动",
      "time": "2018-12-12"
    },
    {
      "pic": "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/Whf%3D180%2C140%2C50/sign=77a5d450a1c379315d3dd524dafc8769/91529822720e0cf3d89f58ad0446f21fbe09aa7f.jpg",
      "title": "海胶新资讯在海胶集团财务总监王劲的率队下",
      "text": "海胶集团领导干部大接访大下访活动小组,在海胶集团财务总监王劲的率队下,走进了金鸡岭分公司、金竹加工分公司、金晨加工分公司开展活动",
      "time": "2018-12-12"
    },
    {
      "pic": "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/Whf%3D180%2C140%2C50/sign=77a5d450a1c379315d3dd524dafc8769/91529822720e0cf3d89f58ad0446f21fbe09aa7f.jpg",
      "title": "海胶新资讯在海胶集团财务总监王劲的率队下,在海胶集团财务总监王劲的率队下",
      "text": "海胶集团领导干部大接访大下访活动小组,在海胶集团财务总监王劲的率队下,走进了金鸡岭分公司、金竹加工分公司、金晨加工分公司开展活动",
      "time": "2018-12-12"
    }
  ]
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

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
