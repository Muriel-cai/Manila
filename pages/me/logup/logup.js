//order.js
//获取应用实例
const app = getApp()
Page({
  data: {
    roleType:1,
    identity:[
    {
      type:1,
      text:'胶农'
    },
    {
      type:2,
      text:'收胶人'
    },
    {
      type:3,
      text:'收胶点'
    },
    {
      type:4,
      text:'收胶站'
    }
    ],
    checked:false,
    network:"",
    username:'',
    phonenum:'',
    zzTime:'',
    xbyname:'',
    hasxby:false,
    xbylist:['李四',"王五"],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
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
  subInfo:function(e){
    let self = this;
    console.log(111111);   
    wx.switchTab({
      url: '../../index/index'
    })
  },
  fqxz:function(){
    let self = this;
    wx.switchTab({
      url: '../../index/index'
    })
  }
});