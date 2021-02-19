// pages/pricelist/pricelist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BgColor: '#ff7315',
    shoucang:"改价",
    inputShowed:false,
    movies:[  
      {url:'/images/house.jpg'} 
    ] ,
    offerArray:[{
      number:'NH001',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    },{
      number:'NH002',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    },{
      number:'NH003',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    },{
      number:'NH004',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    },{
      number:'NH006',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    },{
      number:'NH008',
      offerCon:'125,6360',
      dateTime:'2020/12/01 12:21:28'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  shoucang:function(){
    this.setData({
      inputShowed:true
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