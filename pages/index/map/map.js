Page({
  data: {
    isshow:false,
    latitude: 20.03  ,
    longitude: 110.32 ,
    todayprice : "",
    yesPrice:"",
    wdname:"",
    wdphone:"",
    wdplace:"",
    markers: [  
    {
      id: 1,
      latitude: 20.03,
      longitude: 110.32 ,
      iconPath: '../../../img/icon_selloc.png',
      todayprice:'10.58',
      yesprice:"11.06",
      
    },
    {
      id: 2,
      latitude: 20.02 ,
      longitude: 110.28 ,
      iconPath: '../../../img/icon_selloc.png',
      todayprice: '10.11',
      yesprice: "9.20",
      
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: '网点查询' })
    
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 20.03,
        longitude: 110.32,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 20.03,
        longitude: 110.32,
      }, {
          latitude: 20.02,
          longitude: 110.28,
      }]
    })
  },
  regionchange(e) {
    console.log(e.type, 'regionchange')
  },  
  markertap(e) {
    console.log(15555,e, 'markertap' );
    this.setData({ isshow :true});
    if (e.markerId == 1 ){
      this.setData({
        todayprice: "10.00",
        yesPrice: "09.00",
        wdname: '海口市龙华区收购站',
        wdphone: '13774050645',
        wdplace: '海口市龙华区187号'
      })
    } else {
      this.setData({
        todayprice: "10.02",
        yesPrice: "09.05",
        wdname: '海口市收购站',
        wdphone: '15789892565',
        wdplace: '海口市20号'
       
      })
    }
  },
  controltap(e) {
    console.log(e.controlId, 'controltap')
  },
  bindMapTap:function(){
    console.log(445555)
  }
 
})
