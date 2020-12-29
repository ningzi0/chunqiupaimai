// pages/house/house.js
import {$digest,$init} from '../../utils/common.util'
const app = getApp()



Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTxt: ['区域', '户型', '价格'],//分类
    tab: [true, true, true],
    pinpaiList: [{ 'id': '1', 'title': '南明区' }, { 'id': '1', 'title': '乌当区' }],
    houseArray:[{
      imgSrc:'/images/house.jpg',
      measure:'125m²',
      houseTitle:'中天世纪新城三组团D1栋1单元601',
      houseType:'三室两厅一厨一卫， 精装房',
      houseAdd:'贵州省贵阳市南明区水东路中天世纪新城三组团',
      tags1:'三室两厅',
      tags2:'精装房',
      price:'128万'
    }],
    houseArray2:[{
      imgSrc:'/images/house2.jpg',
      measure:'120m²',
      houseTitle:'品质洋房万科翡翠公园读贵阳一中分校',
      houseType:'三室两厅一厨两卫， 精装房',
      houseAdd:'贵州省贵阳市观山湖区万科翡翠公园',
      tags1:'3室2厅',
      tags2:'南北',
      price:'160万'
    }],
    houseArray3:[{
      imgSrc:'/images/house3.jpg',
      measure:'72.9㎡',
      houseTitle:'贵阳一中正对面 明诚景怡苑 急租 干净整洁',
      houseType:'2室2厅1卫， 精装修',
      houseAdd:'贵州省贵阳市观山湖区金阳客车站明诚景怡苑',
      tags1:'2室2厅',
      tags2:'西南',
      price:'1200/月'
    }],
    selected1: true,
    selected2: false,
    selected3:false,
  },
  
  // 选项卡
  filterTab: function (e) {
    var data = [true, true, true], index = e.currentTarget.dataset.index;
    data[index] = !this.data.tab[index];
    this.setData({
      tab: data
    })
  },
 
  //筛选项点击操作
  filter: function (e) {
    var self = this, id = e.currentTarget.dataset.id, txt = e.currentTarget.dataset.txt, tabTxt = this.data.tabTxt;
    switch (e.currentTarget.dataset.index) {
      case '0':
        tabTxt[0] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          pinpai_id: id,
          pinpai_txt: txt
        });
        break;
      case '1':
        tabTxt[1] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          jiage_id: id,
          jiage_txt: txt
        });
        break;
      case '2':
        tabTxt[2] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          xiaoliang_id: id,
          xiaoliang_txt: txt
        });
        break;
    }
    //数据筛选
    self.getDataList();
  },
  selected1: function (e) {
    this.data.selected1 = true;
    this.data.selected2 = false;
    this.data.selected3 = false;
    $digest(this)
  },
  selected2: function (e) {
    this.data.selected1 = false;
    this.data.selected2 = true;
    this.data.selected3 = false;
    $digest(this)
  },
  selected3: function (e) {
    this.data.selected1 = false;
    this.data.selected2 = false;
    this.data.selected3 = true;
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