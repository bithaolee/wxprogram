var base64 = require("../../images/base64");
// pages/setting/setting.js
Page({
  data:{},
  onLoad:function(options){
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          locationInfo: res
        });
      }
    });

    wx.getNetworkType({
      success: function (res) {
        console.log(res);
        that.setData({
          deviceInfo: res
        });
      }
    });

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          systemInfo: res
        });
      }
    });

    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        });
      }
    });

    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      icon: base64.icon20
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  // user defined events
  sysNav: function (data) {
    wx.openLocation({
      latitude: this.data.locationInfo.latitude,
      longitude: this.data.locationInfo.longitude,
      scale: 65
    });
    console.log(this.data.locationInfo);
    console.log(data);
  }

})