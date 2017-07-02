// TOEFL.js
var app = getApp()
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    finish: false,
    select: false,
    nowword: 0,
    process: 0,
    wordnumber : 0,
    wordcheck: false,
    word: '',
    correct: 0,
    wrong: 0,
    wronglist: [],
    newword: [],
    wholeword: [],
    //wholeword: { "list1": [{ "word": " timberline", "symbol": "['tɪmbəlaɪn]", "meaning": "n. 树带界线" }, { "word": " transition", "symbol": "[træn'zɪʃ(ə)n]", "meaning": "n. 过渡；转变；[分子生物] 转换；变调" }, { "word": " dramatic", "symbol": "[drə'mætɪk]", "meaning": "adj. 戏剧的；急剧的；引 人注目的；激动人心的" }] },
    selectlist: false
  },

  requestTap: function () {
    var that = this
    that.setData({
      wordcheck : true
    })
  },

  back: function (){
    var that = this
    that.setData({
      finish: false,
      select: false,
      nowword: 0,
      wordnumber: 0,
      wordcheck: false,
      word: '',
      correct: 0,
      wrong: 0,
      wronglist: [],
    })
  },

  List1: function(){
    var that = this
    that.setData({
      list: 0,
      select: true,
    })
    this.begincheck()
  },
  List2: function () {
    var that = this
    that.setData({
      list: 1,
      select: true,
    })
    this.begincheck()
  },
  List3: function () {
    var that = this
    that.setData({
      list: 2,
      select: true,
    })
    this.begincheck()
  },
  List4: function () {
    var that = this
    that.setData({
      list: 3,
      select: true,
    })
    this.begincheck()
  },
  List5: function () {
    var that = this
    that.setData({
      list: 4,
      select: true,
    })
    this.begincheck()
  },
  List6: function () {
    var that = this
    that.setData({
      list: 5,
      select: true,
    })
    this.begincheck()
  },
  List7: function () {
    var that = this
    that.setData({
      list: 6,
      select: true,
    })
    this.begincheck()
  },
  List8: function () {
    var that = this
    that.setData({
      list: 7,
      select: true,
    })
    this.begincheck()
  },
  List9: function () {
    var that = this
    that.setData({
      list: 8,
      select: true,
    })
    this.begincheck()
  },
  List10: function () {
    var that = this
    that.setData({
      list: 9,
      select: true,
    })
    this.begincheck()
  },
  List11: function () {
    var that = this
    that.setData({
      list: 10,
      select: true,
    })
    this.begincheck()
  },
  List12: function () {
    var that = this
    that.setData({
      list: 11,
      select: true,
    })
    this.begincheck()
  },
  List13: function () {
    var that = this
    that.setData({
      list: 12,
      select: true,
    })
    this.begincheck()
  }, 
  List14: function () {
    var that = this
    that.setData({
      list: 13,
      select: true,
    })
    this.begincheck()
  },
  List15: function () {
    var that = this
    that.setData({
      list: 14,
      select: true,
    })
    this.begincheck()
  },
  List16: function () {
    var that = this
    that.setData({
      list: 15,
      select: true,
    })
    this.begincheck()
  },
  List17: function () {
    var that = this
    that.setData({
      list: 16,
      select: true,
    })
    this.begincheck()
  },
  List18: function () {
    var that = this
    that.setData({
      list: 17,
      select: true,
    })
    this.begincheck()
  },
  List19: function () {
    var that = this
    that.setData({
      list: 18,
      select: true,
    })
    this.begincheck()
  },
  List20: function () {
    var that = this
    that.setData({
      list: 19,
      select: true,
    })
    this.begincheck()
  },
  List21: function () {
    var that = this
    that.setData({
      list: 20,
      select: true,
    })
    this.begincheck()
  },
  List22: function () {
    var that = this
    that.setData({
      list: 21,
      select: true,
    })
    this.begincheck()
  },
  List23: function () {
    var that = this
    that.setData({
      list: 22,
      select: true,
    })
    this.begincheck()
  },
  List24: function () {
    var that = this
    that.setData({
      list: 23,
      select: true,
    })
    this.begincheck()
  },
  List25: function () {
    var that = this
    that.setData({
      list: 24,
      select: true,
    })
    this.begincheck()
  },
  List26: function () {
    var that = this
    that.setData({
      list: 25,
      select: true,
    })
    this.begincheck()
  },
  List27: function () {
    var that = this
    that.setData({
      list: 26,
      select: true,
    })
    this.begincheck()
  },
  List28: function () {
    var that = this
    that.setData({
      list: 27,
      select: true,
    })
    this.begincheck()
  },

  requestunlock: function() {
    wx.navigateTo({
      url: '../unlock/unlock',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      wholeword: app.globalData.wholeword
    })
    wx.getStorage({
      key: 'access',
      success: function(res) {
        that.setData({
          access: res.data
        })
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
  
  },

  begincheck: function(){
    var that = this
    var wordlist = []
    console.log(that.data.list)
    if(parseInt(that.data.list) == 0){
      console.log('test')
      wordlist = that.data.wholeword.list1
    } else if (parseInt(that.data.list) == 1) {
      console.log('test')
      wordlist = that.data.wholeword.list2
    } else if (parseInt(that.data.list) == 2) {
      console.log('test')
      wordlist = that.data.wholeword.list3
    } else if (parseInt(that.data.list) == 3) {
      console.log('test')
      wordlist = that.data.wholeword.list4
    } else if (parseInt(that.data.list) == 4) {
      console.log('test')
      wordlist = that.data.wholeword.list5
    } else if (parseInt(that.data.list) == 5) {
      console.log('test')
      wordlist = that.data.wholeword.list6
    } else if (parseInt(that.data.list) == 6) {
      console.log('test')
      wordlist = that.data.wholeword.list7
    } else if (parseInt(that.data.list) == 7) {
      console.log('test')
      wordlist = that.data.wholeword.list8
    } else if (parseInt(that.data.list) == 8) {
      console.log('test')
      wordlist = that.data.wholeword.list9
    } else if (parseInt(that.data.list) == 9) {
      console.log('test')
      wordlist = that.data.wholeword.list10
    } else if (parseInt(that.data.list) == 10) {
      console.log('test')
      wordlist = that.data.wholeword.list11
    } else if (parseInt(that.data.list) == 11) {
      console.log('test')
      wordlist = that.data.wholeword.list12
    } else if (parseInt(that.data.list) == 12) {
      console.log('test')
      wordlist = that.data.wholeword.list13
    } else if (parseInt(that.data.list) == 13) {
      console.log('test')
      wordlist = that.data.wholeword.list14
    } else if (parseInt(that.data.list) == 14) {
      console.log('test')
      wordlist = that.data.wholeword.list15
    } else if (parseInt(that.data.list) == 15) {
      console.log('test')
      wordlist = that.data.wholeword.list16
    } else if (parseInt(that.data.list) == 16) {
      console.log('test')
      wordlist = that.data.wholeword.list17
    } else if (parseInt(that.data.list) == 17) {
      console.log('test')
      wordlist = that.data.wholeword.list18
    } else if (parseInt(that.data.list) == 18) {
      console.log('test')
      wordlist = that.data.wholeword.list19
    } else if (parseInt(that.data.list) == 19) {
      console.log('test')
      wordlist = that.data.wholeword.list20
    } else if (parseInt(that.data.list) == 20) {
      console.log('test')
      wordlist = that.data.wholeword.list21
    } else if (parseInt(that.data.list) == 21) {
      console.log('test')
      wordlist = that.data.wholeword.list22
    } else if (parseInt(that.data.list) == 22) {
      console.log('test')
      wordlist = that.data.wholeword.list23
    } else if (parseInt(that.data.list) == 23) {
      console.log('test')
      wordlist = that.data.wholeword.list24
    } else if (parseInt(that.data.list) == 24) {
      console.log('test')
      wordlist = that.data.wholeword.list25
    } else if (parseInt(that.data.list) == 25) {
      console.log('test')
      wordlist = that.data.wholeword.list26
    } else if (parseInt(that.data.list) == 26) {
      console.log('test')
      wordlist = that.data.wholeword.list27
    } else if (parseInt(that.data.list) == 27) {
      console.log('test')
      wordlist = that.data.wholeword.list28
    }
    that.setData({
      wordlist : wordlist,
      word : wordlist[0].word,
      sym: wordlist[0].symbol,
      meaning: wordlist[0].meaning,
      wordnumber: wordlist.length,
      nowword: 0,
      process: 0,
    })
  },

  correct: function(){
    var that = this
    that.setData({
      correct: parseInt(that.data.correct) + 1,
      nowword: parseInt(that.data.nowword) + 1,
      process: parseInt((that.data.nowword + 1)/that.data.wordnumber * 100)
    })
    that.nextword();
  },

  wrong: function () {
    var that = this
    var wordlist = that.data.wordlist
    var wronglist = that.data.wronglist
    wronglist.push(wordlist[this.data.nowword])
    that.setData({
      wrong: parseInt(that.data.wrong) + 1,
      nowword: parseInt(that.data.nowword) + 1,
      wronglist: wronglist,
      process: parseInt((that.data.nowword + 1) / that.data.wordnumber * 100)
    })
    console.log(wronglist)
    that.nextword();
  },

  nextword: function(){
    var that = this
    var wordlist = that.data.wordlist
    if (that.data.nowword == that.data.wordnumber){
      that.setData({
        finish : true,
        wordcheck: false,
        correctper: (that.data.correct / that.data.wordnumber * 100.0).toFixed(1)
      })

      wx.getStorage({
        key: 'newword',
        success: function (res) {
          console.log(res)
          that.setData({
            newword: res.data
          })

          var newword = that.data.newword
          var addList = {}
          addList.timestamp = Date.parse(new Date()/1000);
          addList.time = util.formatTime(new Date())
          addList.list = parseInt(that.data.list) + 1
          addList.number = that.data.wronglist.length
          addList.worddetail = that.data.wronglist

          newword.unshift(addList)
          console.log(newword)

          wx.setStorage({
            key: 'newword',
            data: newword,
            success: function (res) {
              console.log(newword)
            },
            fail: function (res) {
              console.log('生词列表保存失败')
            }
          })

        },
        fail: function (res) {
          console.log('尚未有生词记录')

          var newword = that.data.newword
          var addList = {}
          addList.timestamp = Date.parse(new Date()/1000);
          addList.time = util.formatTime(new Date())
          addList.list = parseInt(that.data.list) + 1
          addList.number = that.data.wronglist.length
          addList.worddetail = that.data.wronglist

          newword.unshift(addList)
          console.log(newword)

          wx.setStorage({
            key: 'newword',
            data: newword,
            success: function (res) {
              console.log(newword)
            },
            fail: function (res) {
              console.log('生词列表保存失败')
            }
          })
        }
      })

    } else {
      that.setData({
        wordcheck: false,
        word: wordlist[that.data.nowword].word,
        sym: wordlist[that.data.nowword].symbol,
        meaning: wordlist[that.data.nowword].meaning,
      })
    }
  },

})