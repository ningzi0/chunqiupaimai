// pages/order/order.js
import {$digest,$init} from '../../utils/common.util'
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderArray:[{
      imgSrc:'/images/house2.jpg',
      tags:'待缴纳',
      orderTitle:'年末特惠9字头买观山湖万科 精装带地暖 读贵阳一中享双轨道',
      ordertext:'起拍价：1547,336元',
      ordertext2:'保证金：150,000元',
      btn:'缴纳保证金'
    },{
      imgSrc:'/images/house2.jpg',
      tags:'待缴纳',
      orderTitle:'年末特惠9字头买观山湖万科 精装带地暖 读贵阳一中享双轨道',
      ordertext:'起拍价：1547,336元',
      ordertext2:'保证金：150,000元',
      btn:'缴纳保证金'
    },{
      imgSrc:'/images/house2.jpg',
      tags:'待缴纳',
      orderTitle:'年末特惠9字头买观山湖万科 精装带地暖 读贵阳一中享双轨道',
      ordertext:'起拍价：1547,336元',
      ordertext2:'保证金：150,000元',
      btn:'缴纳保证金'
    },{
      imgSrc:'/images/house2.jpg',
      tags:'待缴纳',
      orderTitle:'年末特惠9字头买观山湖万科 精装带地暖 读贵阳一中享双轨道',
      ordertext:'起拍价：1547,336元',
      ordertext2:'保证金：150,000元',
      btn:'缴纳保证金'
    }],
    orderArray2:[{
      imgSrc:'/images/house3.jpg',
      tags:'已交保待开拍',
      orderTitle:'年末特惠9字头买观山湖万科 精装带地暖 读贵阳一中享双轨道',
      ordertext:'起拍价：1547,336元',
      ordertext2:'保证金：150,000元',
      btn:'退出竞拍'
    }],
    orderArray3:[{
      imgSrc:'/images/house.jpg',
      tags:'竞价中',
      orderTitle:'年末特惠9字头买观山湖万科 精装带地暖 读贵阳一中享双轨道',
      ordertext:'起拍价：1547,336元',
      ordertext2:'当前价：150,000元',
      btn:'我要出价'
    }],
    selected1: true,
    selected2: false,
    selected3:false,
    selected4:false,
    selected5:false,
  },
  selected1: function (e) {
    this.data.selected1 = true;
    this.data.selected2 = false;
    this.data.selected3 = false;
    this.data.selected4 = false;
    this.data.selected5 = false;
    $digest(this)
  },
  selected2: function (e) {
    this.data.selected1 = false;
    this.data.selected2 = true;
    this.data.selected3 = false;
    this.data.selected4 = false;
    this.data.selected5 = false;
    $digest(this)
  },
  selected3: function (e) {
    this.data.selected1 = false;
    this.data.selected2 = false;
    this.data.selected3 = true;
    this.data.selected4 = false;
    this.data.selected5 = false;
    $digest(this)
  },
  selected4:function(e){
    this.data.selected1 = false;
    this.data.selected2 = false;
    this.data.selected3 = false;
    this.data.selected4 = true;
    this.data.selected5 = false;
    $digest(this)
  }, 
  selected5:function(e){
    this.data.selected1 = false;
    this.data.selected2 = false;
    this.data.selected3 = false;
    this.data.selected4 = false;
    this.data.selected5 = true;
    $digest(this)
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $init(this)
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