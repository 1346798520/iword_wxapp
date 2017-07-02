// error.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input: ""
  },
  request: function () {
    var that = this
    console.log(this.data.input)
    if (this.data.input == app.globalData.accessoverride) {
      app.globalData.overrideaccess = true
      wx.showModal({
        title: '全局功能解锁成功',
        content: '您已成功解锁所有功能，即可立刻开始使用！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
          app.globalData.access = true
          wx.setStorage({
            key: 'access',
            data: true,
          })
          wx.navigateBack({
            
          })
        }
      })
    } else if (this.data.input == app.globalData.adminpw) {
      app.globalData.overrideaccess = true
      wx.showModal({
        title: '欢迎管理员！',
        content: '您已获得全局最高权限！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
          app.globalData.access = true
          wx.setStorage({
            key: 'access',
            data: true,
          })
          wx.navigateBack({

          })
        }
      })
    }else {
      wx.showModal({
        title: '序列号输入错误',
        content: '您输入了错误的序列号，请检查核实或者与管理员确认',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  },
  userInput: function (e) {
    this.setData({
      input: e.detail.value
    })
  },
  back: function(){
    wx.navigateBack({
      delta: 1
    })
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