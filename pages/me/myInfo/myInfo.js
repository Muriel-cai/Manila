//myInfo.js
//获取应用实例
const app = getApp()
Page({
  data: {
    roleType:"t1",
    identity:'农户',
    wtype:'胶农',
    username:'张成',
    phonenum:'18757235648',
    insurance:'20181212458133232',
    zzTime:'2018-12-12',
    age:39,
    place:'海南省海口市同安村',
    bankplace:"海南省海口市同安分行",
    banknum:'6222555623344636',
    xjplace:'海南省海口市',
    iskn:'是',
    area:'50',
    plantNum:'10000',
    pluckNum:'5000',
    xjtime: '2016-09',
    time: '12:01',
    xzname:'张三',
    xzphone:'18754612356',
    ischange:true
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
  haschoise:function(e){
    let self = this;
   
    this.setData({ ischange:false });
  },
  fqxz:function(){
    let self = this;
    wx.switchTab({
      url: '../../index/index'
    })
  },
  cancle:function(){
    let self = this;
    this.setData({ ischange: true });
  },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: '详细信息' })
  }
});