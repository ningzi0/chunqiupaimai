// pages/paimaihui/paimaihui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jssj:"2021-05-26 23:59:59",
    timer:"",
    qgdjs_jo:{ day:"00", hour:"00", min:"00", sec:"00" },
    paimaihuiArray:[{
      imgSrc:'/images/house2.jpg',
      assetTit:'中南菩悦春山居国风别墅 118平实得面积300平送花园80平',
      tags:'即将开始',
      tagsClass:'soon',
      textName:'online',
      textText:'线上拍'
    },{
      imgSrc:'/images/house3.jpg',
      assetTit:'中南菩悦春山居国风别墅 118平实得面积300平送花园80平',
      tags:'正在进行中',
      tagsClass:'conduct',
      textName:'tongbu',
      textText:'同步拍'
    },{
      imgSrc:'/images/house2.jpg',
      assetTit:'中南菩悦春山居国风别墅 118平实得面积300平送花园80平',
      tags:'已结束',
      tagsClass:'end',
      textName:'online',
      textText:'线上拍'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.countDown();
  },
  countDown: function(){
    let that = this;

    that.setData({
      timer: setInterval(function(){
        var lefttime = parseInt((new Date(that.data.jssj.replace(/-/g, "/")).getTime()-new Date().getTime()));
        if(lefttime<=0){
          that.setData({
            qgdjs_jo: { day: "00" ,hour: "00", min: "00", sec: "00"}
          })
          clearInterval(that.data.timer);
          return
        }
        var d = parseInt(lefttime / 1000 / 3600 / 24);
        var h = parseInt(lefttime / 1000 / 3600 % 24);
        var m = parseInt(lefttime / 1000 / 60 % 60);
        var s = parseInt(lefttime / 1000 % 60);

        d < 10 ? d = "0" + d : d;
        h < 10 ? h = "0" + h : h;
        m < 10 ? m = "0" + m : m;
        s < 10 ? s = "0" + s : s;

        that.setData({
          qgdjs_jo: {day: d, hour: h, min: m, sec: s }
        })
      },1000)
    })
  },
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

  }
})