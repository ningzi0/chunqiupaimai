// pages/assets/assets.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTxt: ['默认排序', '类型', '区域', '状态'],//分类
    tab: [true, true, true, true],
    pinpaiList: [{ 'id': '1', 'title': '价格由高到低' }, { 'id': '1', 'title': '价格由低到高' }],
    assetsArray:[{
      imgSrc:'/images/icon/assets1.png',
      text:'房产'
    },
    {
      imgSrc:'/images/icon/assets2.png',
      text:'车辆'
    },
    {
      imgSrc:'/images/icon/assets3.png',
      text:'住宅'
    },
    {
      imgSrc:'/images/icon/assets4.png',
      text:'商业'
    },
    {
      imgSrc:'/images/icon/assets5.png',
      text:'车库'
    },
    {
      imgSrc:'/images/icon/assets6.png',
      text:'办公'
    },
    {
      imgSrc:'/images/icon/assets7.png',
      text:'土地'
    },
    {
      imgSrc:'/images/icon/assets8.png',
      text:'物质'
    },
    {
      imgSrc:'/images/icon/assets9.png',
      text:'股权债券'
    },
    {
      imgSrc:'/images/icon/assets10.png',
      text:'其他'
    }],
    assetsConArray:[{
      imgSrc:'/images/house2.jpg',
      assetTit:'中南菩悦春山居国风别墅 118平实得面积300平送花园80平',
      assetDate:'预计12月2日 10:05结束',
      price:'105.88',
      text1:'910',
      text2:'0',
      tags:'正在进行中',
      tagsClass:'tags1'
    },{
      imgSrc:'/images/house2.jpg',
      assetTit:'中南菩悦春山居国风别墅 118平实得面积300平送花园80平',
      assetDate:'预计12月2日 10:05结束',
      price:'105.88',
      text1:'910',
      text2:'0',
      tags:'即将开始',
      tagsClass:'tags2'
    },{
      imgSrc:'/images/house2.jpg',
      assetTit:'中南菩悦春山居国风别墅 118平实得面积300平送花园80平',
      assetDate:'预计12月2日 10:05结束',
      price:'105.88',
      text1:'910',
      text2:'0',
      tags:'已成交',
      tagsClass:'tags3'
    },{
      imgSrc:'/images/house2.jpg',
      assetTit:'中南菩悦春山居国风别墅 118平实得面积300平送花园80平',
      assetDate:'预计12月2日 10:05结束',
      price:'105.88',
      text1:'910',
      text2:'0',
      tags:'已流拍',
      tagsClass:'tags4'
    }]
  },
  // 选项卡
  filterTab: function (e) {
    var data = [true, true, true, true], index = e.currentTarget.dataset.index;
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
          tab: [true, true, true, true],
          tabTxt: tabTxt,
          pinpai_id: id,
          pinpai_txt: txt
        });
        break;
      case '1':
        tabTxt[1] = txt;
        self.setData({
          tab: [true, true, true, true],
          tabTxt: tabTxt,
          jiage_id: id,
          jiage_txt: txt
        });
        break;
      case '2':
        tabTxt[2] = txt;
        self.setData({
          tab: [true, true, true, true],
          tabTxt: tabTxt,
          xiaoliang_id: id,
          xiaoliang_txt: txt
        });
        break;
        case '3':
        tabTxt[3] = txt;
        self.setData({
          tab: [true, true, true, true],
          tabTxt: tabTxt,
          zhuangtai_id: id,
          zhuangtai_txt: txt
        });
        break;
    }
    //数据筛选
    self.getDataList();
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