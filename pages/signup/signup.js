Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates: [
      { "data_name": "企业拍卖"},
      { "data_name": "个人拍卖"},
    ],
    
    state:0,
    _num: 5, 
    hidden:false,
    hidden2:true,
    hidden3:true,
    //设置当前完成步数
    Steps:0,

  // 当步骤为五步时步骤名不可超过五个汉字
    StepsList: ["实名信息", "支付保证金", "认证成功"],
  //步骤为五步时
    progress:70,
    percent:0,
  // //步骤为四步时
  //   progress: 75,
  //   percent: 33,
  // //步骤为三步时
  //   progress: 67,
  //   percent: 50,
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
  steps1:function(){
    this.setData({
      Steps:1,
      percent:50,
      hidden:true,
      hidden2:false,
      hidden3:true,
    })
  },
  steps2:function(){
    this.setData({
      Steps:2,
      percent:100,
      hidden:true,
      hidden2:true,
      hidden3:false,
    })
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
  clickNum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _num: e.target.dataset.num
    })
  },
})
