// pages/simulation/simulation.js
import {$digest,$init} from '../../utils/common.util'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenn:true,
    _num:1,
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
    }],
    selected1: true,
    selected2: false,
    selected3:false,
    selected4:false,
    onlineArray:[{
      number:'NB1001',
      tags:'在线',
      className:'onlineTags'
    },{
      number:'NB1003',
      tags:'在线',
      className:'onlineTags'
    },{
      number:'NB1004',
      tags:'在线',
      className:'onlineTags'
    },{
      number:'NB1005',
      tags:'在线',
      className:'onlineTags'
    },{
      number:'NB1006',
      tags:'在线',
      className:'onlineTags'
    },{
      number:'NB1007',
      tags:'在线',
      className:'onlineTags'
    },{
      number:'NB1008',
      tags:'在线',
      className:'onlineTags'
    },{
      number:'NB1002',
      tags:'离线',
      className:'offlineTags'
    }]
  },
  selected1: function (e) {
    this.data.selected1 = true;
    this.data.selected2 = false;
    this.data.selected3 = false;
    this.data.selected4 = false;
    $digest(this)
  },
  selected2: function (e) {
    this.data.selected1 = false;
    this.data.selected2 = true;
    this.data.selected3 = false;
    this.data.selected4 = false;
    $digest(this)
  },
  selected3: function (e) {
    this.data.selected1 = false;
    this.data.selected2 = false;
    this.data.selected3 = true;
    this.data.selected4 = false;
    $digest(this)
  },
  selected4:function(e){
    this.data.selected1 = false;
    this.data.selected2 = false;
    this.data.selected3 = false;
    this.data.selected4 = true;
    $digest(this)
  },
  onlineClickShow:function(){
    this.setData({
      hiddenn:false,
    })
  },
  onlineClickHidden:function(){
    this.setData({
      hiddenn:true,
    })
  },
  menuClick:function(e){
    this.setData({
      _num:e.target.dataset.num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $init(this)
  },
  shoucang: function(){
    var bgColor = this.data.BgColor == '#999999' ? '#999999' : '#999999';
    // 设置背景颜色数据
    this.setData({
      BgColor: bgColor,
      shoucang:"已收藏"
    });
 
  },

// 拍卖师发言
//点击我显示底部弹出框
clickme: function () {
  this.showModal();
},

//显示对话框
showModal: function () {
  // 显示遮罩层
  var animation = wx.createAnimation({
    duration: 0,
    timingFunction: "linear",
    delay: 0
  })
  this.animation = animation
  animation.translateY(500).step()
  this.setData({
    animationData: animation.export(),
    showModalStatus: true
  })
  setTimeout(function () {
    animation.translateY(0).step()
    this.setData({
      animationData: animation.export()
    })
  }.bind(this), 0)
},
//隐藏对话框
hideModal: function () {
  // 隐藏遮罩层
  var animation = wx.createAnimation({
    duration: 400,
    timingFunction: "linear",
    delay: 0
  })
  this.animation = animation
  animation.translateY(500).step()
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