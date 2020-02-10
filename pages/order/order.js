//order.js
//获取应用实例
const app = getApp()
Page({
  data: {
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/mk.png',
      position: {
        left: 0,
        top: 300 - 1,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  //引入数据库
  onLoad: function (option) {
    var url = app.url + 'Api/Api/get_shop_dp&PHPSESSID=' + wx.getStorageSync('PHPSESSID')
    var that = this
    console.log(option)
    if (option.scene) {
      this.setData({
        isshow: false
      })
      wx.navigateTo({
        url: '../chat/chat?scene=' + option.scene,
      })
    } else {
      this.setData({
        isshow: true
      })
    }
    wx.request({ //让服务器端统一下单，并返回小程序支付的参数
      url: url,
      data: {
        openid: wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res);
        that.setData({
          markers: res.data.data
        });
        wx.getLocation({
          type: 'wgs84',
          success(mres) {
            var map_lat = mres.latitude;
            var map_long = mres.longitude;
            var map_speed = mres.speed;
            var map_accuracy = mres.accuracy;
            that.setData({
              lat: map_lat
            });
            that.setData({
              long: map_long
            });
          }
        });
      }
    });
  },

  //显示对话框
  showModal: function (event) {
    //console.log(event.markerId);
    var i = event.markerId;
    var url = app.url + 'Api/Api/get_shop_dp_detail&PHPSESSID=' + wx.getStorageSync('PHPSESSID');
    var that = this;
    console.log('====get_detail====')
    wx.request({
      url: url,
      data: {
        id: i,
        openid: wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res);
        that.setData({
          myall: res.data.data
        });
      }
    });

    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  opendetail: function (event) {
    console.log('-----跳转商品-----');
    //console.log(event);
    var id = event.currentTarget.dataset.id;
    this.setData({
      id: id
    });
    wx.navigateTo({
      url: "/pages/detail/detail?id=" + id
    }),
      console.log(id);
  },

  calling: function (event) {
    var tel = event.currentTarget.dataset.id.tel;
    this.setData({
      tel: tel
    });
    wx.makePhoneCall({
      phoneNumber: tel,
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})
