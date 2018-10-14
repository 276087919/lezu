// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    houseType: ['一室户','两室户','三室户'],
    houseTypeIndex: 0,
    monthlySalary: '',
    workPlace: '',
    reminder: ''
  },

  // 改变户型，使用bindPickerChange(e)
   bindPickerChange(e){
     let _this = this;
     _this.setData({
       //获取数值
       houseTypeIndex: e.detail.value
     })
   },

  bindNumInput: function (e) {
    this.setData({
      monthlySalary: e.detail.value
    })

  },
  bindTextInput: function (e) {
    this.setData({
      workPlace: e.detail.value
    })
  },

  searchBtnClick: function(e){
    if (this.data.monthlySalary.length == 0 || this.data.workPlace.length == 0){
      // this.setData({
      //   reminder: '当前月薪和工作地标不能为空！'
      // })
      // console.log(this.data.reminder)
      wx.showToast({
        title: '请输入完整信息',
        image: '../../imgs/warning-circle.png'
      })
    }else{
      this.setData({
        reminder: ''
      })
      wx.navigateTo({
        url: '/pages/recommend/recommend?monthlySalary=' + this.data.monthlySalary + '&workPlace=' + this.data.workPlace,
      })
    }
  },

  // onTouch: function (e) {
  //   wx.navigateTo({
  //     url: '/pages/recommend/recommend?monthlySalary=' + this.data.monthlySalary + '&workPlace=' + this.data.workPlace,
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //   let that = this
  //   //获取全局数据
  //   app.getUserInfo(function(userinfo){
  //      //更新数据
  //      that.setData({
  //         userinfo:userinfo
  //      })
  //   })
  // },
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