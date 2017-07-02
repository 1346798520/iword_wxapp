// Dic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    edit: false,
    alllist: [],
    detail: false
  },

  back: function (e) {
    var that = this
    that.setData({
      detail: false
    })
  },

  editButton: function(){
    var that = this
    if (that.data.edit == false) {
      that.setData({
        edit: true
      })
    }else if (that.data.edit==true){
      that.setData({
        edit: false
      })
    }
    
  },

  edit: function (num) {
    var that = this
    //设置当前样式
    var id = parseInt(num)
    console.log('alllist:'+that.data.alllist)
    var alllist = that.data.alllist
    alllist.splice(id,1)
    that.setData({
      alllist : alllist
    })
    wx.setStorage({
      key: 'newword',
      data: that.data.alllist,
    })
  },

  tagChoose: function (e){
    var that = this
    var id = parseInt(e.currentTarget.dataset.index);
    //设置当前样式
    console.log(id)
    that.setData({
      currentItem : that.data.alllist[id].worddetail,
      id: id,
    })
    if(that.data.edit == false){
      that.setData({
        detail: true
      })
    }else{
      that.edit(id)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'newword',
      success: function(res) {
        that.setData({
          alllist : res.data
        })
        console.log(that.data.alllist)
      },
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