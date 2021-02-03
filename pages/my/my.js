// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mytableArray:[{
      'imageSrc':'/images/icon/mytable1.png',
      'mytableText':'待交保'
    },{
      'imageSrc':'/images/icon/mytable2.png',
      'mytableText':'待开拍'
    },{
      'imageSrc':'/images/icon/mytable3.png',
      'mytableText':'竞价中'
    },{
      'imageSrc':'/images/icon/mytable4.png',
      'mytableText':'已结束'
    },{
      'imageSrc':'/images/icon/mytable5.png',
      'mytableText':'已拍下'
    }],
    mylistArray:[{
      mylistTitle:'我的收藏',
      url:'/pages/Collection/Collection'
    },
    {
      mylistTitle:'我的保证金/预缴款',
      url:'/pages/deposit/deposit'
    },
    {
      mylistTitle:'我要出售',
      url:'/pages/sell/sell'
    },
    {
      mylistTitle:'管理拍卖',
      url:'/pages/admin/admin'
    }],
    toolArray:[{
      toolimgSrc:'/images/icon/mytool1.png',
      toolLiText:'我的信息',
      url:'/pages/info/info',
      switchTab:'navigate'
    },{
      toolimgSrc:'/images/icon/mytool2.png',
      toolLiText:'帮助中心',
      url:'/pages/help/help',
      switchTab:'navigate'
    },{
      toolimgSrc:'/images/icon/mytool3.png',
      toolLiText:'模拟拍卖',
      url:'/pages/list/list',
      switchTab:'switchTab'
    },{
      toolimgSrc:'/images/icon/mytool4.png',
      toolLiText:'专业团队',
      url:'/pages/team/team',
      switchTab:'navigate'
    },{
      toolimgSrc:'/images/icon/mytool5.png',
      toolLiText:'交易服务',
      url:'/pages/service/service',
      switchTab:'navigate'
    },{
      toolimgSrc:'/images/icon/mytool6.png',
      toolLiText:'租赁管理',
      url:'',
      switchTab:'navigate'
    },{
      toolimgSrc:'/images/icon/mytool7.png',
      toolLiText:'律师调节',
      url:'',
      switchTab:'navigate'
    }],
    beforeArray:[{
      imgSrc:'/images/pro1.jpg',
      t_ctit:'邹贵生贵阳市观山湖区金阳南路6号世纪城B组',
      tabinfoPrice:'26.8万',
      tabinfo_price:'8.8万',
      tabinfo_time:'12月05日 10:00 ',
      tabinfo_number:'273',
      tabinfo_number2:'29'
    },
    {
      imgSrc:'/images/pro1.jpg',
      t_ctit:'邹贵生贵阳市观山湖区金阳南路6号世纪城B组',
      tabinfoPrice:'26.8万',
      tabinfo_price:'8.8万',
      tabinfo_time:'12月05日 10:00 ',
      tabinfo_number:'273',
      tabinfo_number2:'29'
    },
    {
      imgSrc:'/images/pro1.jpg',
      t_ctit:'邹贵生贵阳市观山湖区金阳南路6号世纪城B组',
      tabinfoPrice:'26.8万',
      tabinfo_price:'8.8万',
      tabinfo_time:'12月05日 10:00 ',
      tabinfo_number:'273',
      tabinfo_number2:'29'
    },
    {
      imgSrc:'/images/pro1.jpg',
      t_ctit:'邹贵生贵阳市观山湖区金阳南路6号世纪城B组',
      tabinfoPrice:'26.8万',
      tabinfo_price:'8.8万',
      tabinfo_time:'12月05日 10:00 ',
      tabinfo_number:'273',
      tabinfo_number2:'29'
    }]
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