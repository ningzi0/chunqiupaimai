// pages/simulation2/simulation2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BgColor: '#ff7315',
    shoucang:"收藏",
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