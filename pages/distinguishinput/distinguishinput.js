// pages/distinguishinput/distinguishinput.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:true,
    tablehidden:false,
    dates: [
      { "data_name": "企业拍卖"},
      { "data_name": "个人拍卖"},
    ],
    state:0
  },
  //选择table后加样式
  select_date: function (e) {
    let currentTabIndex = e.currentTarget.dataset.key;
    console.log(currentTabIndex)
    let show =[false,true];
    this.setData({
      state: e.currentTarget.dataset.key, tablehidden:show[currentTabIndex]
    });
  },
  img_w_show(){
    var _this=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        _this.setData({
          imglist: _this.data.imglist.concat(tempFilePaths)
        })
      }
    })
  },
  onlineClickShow:function(){
    this.setData({
      hidden:false,
    })
  },
  onlineClickHidden:function(){
    this.setData({
      hidden:true,
    })
  },


   /* 生命周期函数--监听页面加载
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