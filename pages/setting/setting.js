//index.js
//获取应用实例
const weapp = require('../../utils/weapp-qrcode.js')
const app = getApp()

import Dialog from '../../dist/dialog/dialog';
Page({
  data: {
    isjn:1,
    active: 0,
    hastab:'0',
    allsetting:'',
    ifcs:false,
    isws:false,
    setchoText:"选择",
    select_all: false,
    middlearr: [],
    showewmPic: false,
    ewmPic: '',
    totalweight:"1000",
    totalmz:"980",
    totalrjl:"800",
    showinfo:false,
    "orserData": [
      {
        "code": "1514166645655",
        "sgname": "李元",
        "ratioG": 45,
        'ratioR':50,
        'ratioM':5,
        "time": "2018-12-12",
        "totalmoney":500,
        "checked": false
      },
      {
        "code": "1514166645656",
        "sgname": "李元",
        "ratioG": 85,
        'ratioR': 100,
        'ratioM':15,
        "time": "2018-12-01",
        "totalmoney": 500,
        "checked": false
      },
      {
        "code": "1514166645656",
        "sgname": "刘天启",
        "ratioG": 160,
        'ratioR': 180,
        'ratioM': 20,
        "time": "2018-12-01",
        "totalmoney": 500,
        "checked": false
      } ,
      {
        "code": "1514166645656",
        "sgname": "王思远",
        "ratioG": 235,
        'ratioR': 260,
        'ratioM': 25,
        "time": "2018-12-01",
        "totalmoney": 1200,
        "checked": false
      }      
    ]
  },
  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function (option) {
    wx.setNavigationBarTitle({ title: '我的订单' });
    console.log(option,14566 );
    this.setData({ isjn: app.globalData.roletype }); 
    if (app.globalData.roletype == 2){
      this.setData({ isws: true }); 
    } 
    this.setData({
      allsetting: this.data.orserData.length
    })
    Dialog.confirm({
      title: '提示',
      message: '您还未注册，请前往注册'
    }).then(() => {
      // on confirm;
      wx.navigateTo({
        url: '../me/logup/logup'
      })
    }).catch(() => {
      // on cancel
      console.log("返回")
      wx.switchTab({
        url: '../index/index'
      })
    });
  },
  ontab: function (e){
    let self = this;
    console.log(e.detail.index)
    // this.setData({ ifcs : true });
    if(e.detail.index == 1){
      this.setData({ isws: false, ifcs: false });
    } else {
      this.setData({ isws: true });
    }
    
  },
  setcho:function(e){
    let self = this;   
    if (self.data.ifcs == false){
      this.setData({ ifcs: true, setchoText:"取消" });
    } else {
      this.setData({ ifcs: false, setchoText: "选择"  });
    }
    console.log(self.data.ifcs)
  },
  toorder:function(e){
    let self = this;
    let arr = this.data.orserData;
    let arr2 = [];
    console.log(e,e.currentTarget.dataset);
    if (self.data.ifcs == true){     
      var index = e.currentTarget.dataset.id;
      arr[index].checked = !arr[index].checked;
      console.log(arr.length,"arr.lengt")
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
          arr2.push(arr[i])
        }
      };
      this.setData({
        orserData: arr,
        middlearr: arr2
      })
     
    } else {
      wx.navigateTo({
        url: 'orderInfo/orderInfo'
      })
    }
    
  },
  // 全选
  select_all: function () {
    let that = this;
    that.setData({
      select_all: !that.data.select_all
    })
    if (that.data.select_all) {
      let arr = that.data.orserData;
      let arr2 = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked == true) {
          arr2.push(arr[i]);
        } else {
          arr[i].checked = true;
          arr2.push(arr[i]);
        }
      }
      that.setData({
        orserData: arr2,
        middlearr: arr2
      })
    }
  },
  // 取消全选
  select_none: function () {
    let self = this;
    this.setData({
      select_all: !this.data.select_all
    })
    let arr = this.data.orserData;
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i].checked = false;
      arr2.push(arr[i]);
    }
    this.setData({
      orserData: arr2,
      middlearr: []
    })
  },
  deleteitem: function () {
    console.log(1166);
    console.log(this.data.middlearr);
    if (this.data.middlearr.length >0){
      this.drawImg();
    } else{
      Dialog.alert({
        message: '请先选择你要出售的订单'
      }).then(() => {
        // on close
      });
    }
    // this.drawImg();
  },
  drawImg: function () {
    
    var ewmData = {
      name: this.data.username,
      phone: this.data.phoneNum
    }
    var imgData = weapp.drawImg(
      this.data.showewmPic,
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
  getInfo:function(){
    let self = this;
    let totlaw =0 ,totalPz = 0 ,totlaGjl=0;
    for (var i = 0; i < this.data.middlearr.length; i++){   
      totlaw += this.data.middlearr[i].ratioR;
      totalPz += this.data.middlearr[i].ratioG;
      totlaGjl += this.data.middlearr[i].ratioM;     
    }    
    this.setData({ totalweight: totlaw, totalrjl: totalPz, totalmz: totlaGjl })
    if (self.data.showinfo == false ){
      this.setData({ showinfo: true, })
    } else {
      this.setData({ showinfo: false })
    }
  },
  onClose:function(){
    this.setData({ showinfo: false })
  },
  getUserInfo: function (e) {
    
  }
})
