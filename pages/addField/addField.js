//index.js
//获取应用实例
var dateTimePicker = require('../../utils/dateTimePicker.js');

const app = getApp()
Page({
    data: {
        uploaderList: [],
        uploaderNum:0,
        showUpload:true,
        date: '2018-10-01',
        time: '12:00',
        dateTimeArray: null,
        dateTime: null,
        dateTimeArray1: null,
        dateTime1: null,
        startYear: 2000,
        endYear: 2050
    },
    // 删除图片
    clearImg:function(e){
        var nowList = [];//新数据
        var uploaderList = this.data.uploaderList;//原数据
        
        for (let i = 0; i < uploaderList.length;i++){
            if (i == e.currentTarget.dataset.index){
                continue;
            }else{
                nowList.push(uploaderList[i])
            }
        }
        this.setData({
            uploaderNum: this.data.uploaderNum - 1,
            uploaderList: nowList,
            showUpload: true
        })
    },
    //展示图片
    showImg:function(e){
        var that=this;
        wx.previewImage({
            urls: that.data.uploaderList,
            current: that.data.uploaderList[e.currentTarget.dataset.index]
        })
    },
    //上传图片
    upload: function(e) {
        var that = this;
        wx.chooseImage({
            count: 9 - that.data.uploaderNum, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                console.log(res)
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                let tempFilePaths = res.tempFilePaths;
                let uploaderList = that.data.uploaderList.concat(tempFilePaths);
                if (uploaderList.length==1){
                    that.setData({
                        showUpload:false
                    })
                }
                that.setData({
                    uploaderList: uploaderList,
                    uploaderNum: uploaderList.length,
                })
            }
        })
    },
    onLoad: function() {
        // 获取完整的年月日 时分秒，以及默认显示的数组
        var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
        var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
        // 精确到分的处理，将数组的秒去掉
        var lastArray = obj1.dateTimeArray.pop();
        var lastTime = obj1.dateTime.pop();

        this.setData({
        dateTime: obj.dateTime,
        dateTimeArray: obj.dateTimeArray,
        dateTimeArray1: obj1.dateTimeArray,
        dateTime1: obj1.dateTime
        });
    },
    changeDate(e){
        this.setData({ date:e.detail.value});
      },
      changeTime(e){
        this.setData({ time: e.detail.value });
      },
      changeDateTime(e){
        this.setData({ dateTime: e.detail.value });
      },
      changeDateTime1(e) {
        this.setData({ dateTime1: e.detail.value });
      },
      changeDateTimeColumn(e){
        var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;
    
        arr[e.detail.column] = e.detail.value;
        dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    
        this.setData({
          dateTimeArray: dateArr,
          dateTime: arr
        });
      },
      changeDateTimeColumn1(e) {
        var arr = this.data.dateTime1, dateArr = this.data.dateTimeArray1;
    
        arr[e.detail.column] = e.detail.value;
        dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    
        this.setData({
          dateTimeArray1: dateArr,
          dateTime1: arr
        });
      }
})