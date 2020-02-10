//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isjn:true
  },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: '关系拓扑图' });
    console.log(app.globalData.roletype,"pppkdkkdj")
    if (app.globalData.roletype == 1){
      this.setData({ isjn: true });
    } else if (app.globalData.roletype == 2){
      this.setData({ isjn: false });
    } else {
      this.setData({ isjn: true });
    }
    
  }
  
})
