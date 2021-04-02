// pages/simulation2/simulation2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jssj:"2021-05-26 23:59:59",
    timer:"",
    qgdjs_jo:{ day:"00", hour:"00", min:"00", sec:"00" },
    BgColor: '#ff7315',
    shoucang:"收藏",
    showMore: false,
    movies:[  
      {url:'/images/house.jpg'} ,  
      {url:'/images/house.jpg'} ,  
      {url:'/images/house.jpg'} ,  
      {url:'/images/house.jpg'}   
    ] ,
    offerArray:[{
      imgSrc:'/images/header.jpg',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    },{
      imgSrc:'/images/header.jpg',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    },{
      imgSrc:'/images/header.jpg',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    },{
      imgSrc:'/images/header.jpg',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    },{
      imgSrc:'/images/header.jpg',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    },{
      imgSrc:'/images/header.jpg',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    }]
  },
  listToggle: function () {
    this.setData({
      showMore: !this.data.showMore
    })
  },
  shoucang: function(){
    var bgColor = this.data.BgColor == '#999999' ? '#999999' : '#999999';
    // 设置背景颜色数据
    this.setData({
      BgColor: bgColor,
      shoucang:"已收藏"
    });
 
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