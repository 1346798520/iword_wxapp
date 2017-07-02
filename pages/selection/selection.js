// selection.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    access: null,
  },

  tomyDic: function () {
    wx.navigateTo({
      url: '../selection/Dic/Dic'
    })
  },
  toTOEFL: function(){
    wx.navigateTo({
      url: '../selection/TOEFL/TOEFL'
    })
  },
  TOEFLlearn: function () {
    wx.navigateTo({
      url: '../selection/TOEFLlearn/TOEFLlearn'
    })
  },
  unlockTap: function () {
    wx.navigateTo({
      url: '../selection/unlock/unlock'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    var that = this
    wx.getStorage({
      key: 'access',
      success: function(res) {
        that.setData({
          access: res.data
        })
        app.globalData.access = res.data
      },
      fail: function (res) {
        that.setData({
          access: false
        })
        app.globalData.access = false
        wx.setStorage({
          key: 'access',
          data: false,
        })
      }
    })

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      console.log(that.data.userInfo)
      console.log((that.encode(that.data.userInfo.nickName)).substring(0,8))
      app.globalData.accessoverride = (that.encode(that.data.userInfo.nickName)).substring(0, 8)
    })
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
    var that = this
    wx.getStorage({
      key: 'access',
      success: function (res) {
        that.setData({
          access: res.data
        })
        app.globalData.access = res.data
      },
      fail: function (res) {
        that.setData({
          access: false
        })
        app.globalData.access = false
        wx.setStorage({
          key: 'access',
          data: false,
        })
      }
    })

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
  
  },

  encode: function(data){
    if(data == '') return '请输入汉字';
    var str = ''; 
    //way to encrypte the data and will be used to judge whether the user entered the right serial number
    return str;
  },
})