// pages/team/team.js
import {$digest,$init} from '../../utils/common.util'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamArray:[{
      imgSrc:'/images/header.jpg',
      name:'蜡笔小新',
      occupation:'评估师',
      field:'评估',
      describe:'专家介绍：贵州省土地估价师协会理事，贵州省房地产估价师协会理事、贵州省房地产估价行业协会专家库成员、英国皇家特许测量师协会会员、安顺市房地产协会监事、中国注册房地产估价师、中国执业土地估价师'
    },{
      imgSrc:'/images/header.jpg',
      name:'蜡笔小新',
      occupation:'评估师',
      field:'评估',
      describe:'专家介绍：贵州省土地估价师协会理事，贵州省房地产估价师协会理事、贵州省房地产估价行业协会专家库成员、英国皇家特许测量师协会会员、安顺市房地产协会监事、中国注册房地产估价师、中国执业土地估价师'
    },{
      imgSrc:'/images/header.jpg',
      name:'蜡笔小新',
      occupation:'评估师',
      field:'评估',
      describe:'专家介绍：贵州省土地估价师协会理事，贵州省房地产估价师协会理事、贵州省房地产估价行业协会专家库成员、英国皇家特许测量师协会会员、安顺市房地产协会监事、中国注册房地产估价师、中国执业土地估价师'
    }],
    teamArray2:[{
      imgSrc:'/images/house.jpg',
      name:'蜡笔小新',
      occupation:'评估师',
      field:'评估',
      describe:'专家介绍：贵州省土地估价师协会理事，贵州省房地产估价师协会理事、贵州省房地产估价行业协会专家库成员、英国皇家特许测量师协会会员、安顺市房地产协会监事、中国注册房地产估价师、中国执业土地估价师'
    }],
    teamArray3:[{
      imgSrc:'/images/banner.jpg',
      name:'蜡笔小新',
      occupation:'律师',
      field:'律师',
      describe:'专家介绍：贵州省土地估价师协会理事，贵州省房地产估价师协会理事、贵州省房地产估价行业协会专家库成员、英国皇家特许测量师协会会员、安顺市房地产协会监事、中国注册房地产估价师、中国执业土地估价师'
    }],
    teamArray4:[{
      imgSrc:'/images/pro1.jpg',
      name:'蜡笔小新',
      occupation:'拍卖师',
      field:'拍卖师',
      describe:'专家介绍：贵州省土地估价师协会理事，贵州省房地产估价师协会理事、贵州省房地产估价行业协会专家库成员、英国皇家特许测量师协会会员、安顺市房地产协会监事、中国注册房地产估价师、中国执业土地估价师'
    }],
    selected1: true,
    selected2: false,
    selected3:false,
    selected4:false,
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