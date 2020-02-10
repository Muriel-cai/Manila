//order.js
//获取应用实例
const app = getApp()
Page({
  data: {
    roleType: true,
    allrole:[],
    fjn:"jn",  
    identity:[
    {
      typeid:'t1',
      text:'胶农',
      static: true
    },
    {
      typeid:'t2',
      text:'收胶人',
      static: false
    },
    {
      typeid:'t3',
      text:'收胶点',
      static: false
    },
    {
      typeid:'t4',
      text:'收胶站',
      static: false
    }
    ],
    checked:false,
    network:"",
    username:'',
    phonenum:'',
    zzTime:'',
    xbyname:'',
    hasxby:true,
    xbylist:['李四',"王五"],
    index: 0,
    date: '2016-09-01',
    time: '12:01',
    xzname:'',
    xzphone:'',
    hasinfo:2
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
    let index = e.currentTarget.dataset.index;
    let allrole = this.data.identity;
    
    if (allrole[index].static == false) {
      allrole[index].static = true;
    } else {
      allrole[index].static = false;
    }
    this.setData({
      identity: allrole
    })
    console.log(this.data.identity, index, e.currentTarget, allrole[index])
    // console.log(e, e.currentTarget.id, e.currentTarget.dataset.static );
    
    if (allrole[0].static == true ){
      this.setData({ roleType: true});
    } else {
      this.setData({ roleType: false });
    }
    if (allrole[0].static == true && allrole[1].static != true && allrole[2].static != true && allrole[3].static != true){
      this.setData({ fjn: 'jn'});
    } else {
      this.setData({ fjn: 'fjn' });
    }
  },
  fqxz:function(){
    let self = this;
    wx.switchTab({
      url: '../../index/index'
    })
  },
  onLoad: function (option) {
    wx.setNavigationBarTitle({ title: '注册信息' })
    if (option.detail == 1){
      this.setData({ 
        hasinfo : 1,
        username: '王军',
        phonenum:'13774256548'
        
        });
    }
  }
});