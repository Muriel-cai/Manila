// pages/me/confirmPrice/confirmPrice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    peoplename: "张成",
    peopleplace: "海南省海口市同安村",
    ratioR:"50",
    ratioM:"30",
    ratioG:'20',
    totalmoney:"500"

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  combtn: function (e) {
    wx.switchTab({
      url: '../me'
    }) 
  },
  onload: function () {
    wx.setNavigationBarTitle({ title: '确认海胶信息' });
  }
})