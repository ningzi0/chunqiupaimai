//index.js
//获取应用实例
import {$digest,$init} from '../../utils/common.util'
const app = getApp()

Page({
  data: {
    hidden:true,
    date: '请选择往期时间',
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
    }],
    conArray:[{
      imgSrc:'/images/pro1.jpg',
      t_ctit:'邹贵生贵阳市观山湖区金阳南路6号世纪城B组',
      tabinfoPrice:'26.8万',
      tabinfo_price:'8.8万',
      tabinfo_time:'今日拍卖 14:00',
      tabinfo_number:'273',
      tabinfo_number2:'29'
    },
    {
      imgSrc:'/images/pro1.jpg',
      t_ctit:'邹贵生贵阳市观山湖区金阳南路6号世纪城B组',
      tabinfoPrice:'26.8万',
      tabinfo_price:'8.8万',
      tabinfo_time:'今日拍卖 14:00',
      tabinfo_number:'273',
      tabinfo_number2:'29'
    },
    {
      imgSrc:'/images/pro1.jpg',
      t_ctit:'邹贵生贵阳市观山湖区金阳南路6号世纪城B组',
      tabinfoPrice:'26.8万',
      tabinfo_price:'8.8万',
      tabinfo_time:'今日拍卖 14:00',
      tabinfo_number:'273',
      tabinfo_number2:'29'
    },
    {
      imgSrc:'/images/pro1.jpg',
      t_ctit:'邹贵生贵阳市观山湖区金阳南路6号世纪城B组',
      tabinfoPrice:'26.8万',
      tabinfo_price:'8.8万',
      tabinfo_time:'今日拍卖 14:00',
      tabinfo_number:'273',
      tabinfo_number2:'29'
    }],
    movies:[  
      {url:'/images/banner.jpg'} ,  
      {url:'/images/banner.jpg'} ,  
      {url:'/images/banner.jpg'} ,  
      {url:'/images/banner.jpg'}   
    ] ,
    sortArray:[
      {imgSrc:'/images/icon/sort1.png',text:'房产','url':'/pages/house/house'},
      {imgSrc:'/images/icon/sort2.png',text:'汽车','url':'/pages/list/list'},
      {imgSrc:'/images/icon/sort3.png',text:'车库','url':'/pages/list/list'},
      {imgSrc:'/images/icon/sort4.png',text:'商业','url':'/pages/list/list'},
      {imgSrc:'/images/icon/sort5.png',text:'办公','url':'/pages/list/list'},
      {imgSrc:'/images/icon/sort6.png',text:'土地','url':'/pages/list/list'},
      {imgSrc:'/images/icon/sort7.png',text:'物质','url':'/pages/list/list'},
      {imgSrc:'/images/icon/sort8.png',text:'股权债券','url':'/pages/list/list'}
    ],
    adList:[{
      'url':'',
      'tags':'HOT',
      'title':'2020年12月第一场拍卖会将于12月5日下午2点在某地举行，拍卖标的'
    },{
      'url':'',
      'tags':'HOT',
      'title':'2020年12月第一场拍卖会将于12月5日下午2点在某地举行，拍卖标的'
    }],
    selected1: true,
    selected2: false,
    selected3:true,
    selected4:false,
    selected6:false,
    selected7:true,
    selected8:false,
    selected9:false,
  },
  selected1: function (e) {
    this.data.selected1 = true;
    this.data.selected2 = false;
    $digest(this)
  },
  selected2: function (e) {
    this.data.selected2 = true;
    this.data.selected1 = false;
    $digest(this)
  },
  selected3: function (e) {
    this.data.selected3 = true;
    this.data.selected4 = false;
    this.data.selected6   =false;
    $digest(this)
  },
  selected4:function(e){
    this.data.selected4 = true;
    this.data.selected3 = false;
    this.data.selected6   =false;
    $digest(this)
  },
  selected6:function(e){
    this.data.selected6 = true;
    this.data.selected4 = false;
    this.data.selected3   =false;
    $digest(this)
  },
  selected7: function (e) {
    this.data.selected7 = true;
    this.data.selected8 = false;
    this.data.selected9   =false;
    $digest(this)
  },
  selected8:function(e){
    this.data.selected8 = true;
    this.data.selected7 = false;
    this.data.selected9   =false;
    $digest(this)
    this.setData({
      selected8: true,
      selected7: false,
      selected9: false,
    })
  },
  selected9:function(e){
    this.data.selected9 = true;
    this.data.selected8 = false;
    this.data.selected7   =false;
    $digest(this)
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.data.date  =e.detail.value;
    $digest(this)
  },
  close:function(e){
    this.data.hidden = true;
    $digest(this)
  },
  onLoad: function (e) {
    let that =this;
    setTimeout(function() {
      that.data.hidden = false;
      $digest(that)
   }, 2000);
    
    $init(this);
  },
  navto:function(){
    wx.switchTab({
      
    })
  }

})
