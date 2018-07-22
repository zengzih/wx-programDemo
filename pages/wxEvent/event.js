// pages/wxEvent/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      options: [{
          value: '选项1',
          label: '黄金糕'
      }, {
          value: '选项2',
          label: '双皮奶'
      }, {
          value: '选项3',
          label: '蚵仔煎'
      }, {
          value: '选项4',
          label: '龙须面'
      }, {
          value: '选项5',
          label: '北京烤鸭'
      }],
  },
  handlerClick(e) {
    const { list } = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../navigateTo/navigate?id=' + list.value,
      success(res) {
          console.log('----成功----', res);
      },
      fail(error) {
          console.log('----失败----', error);
      }
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