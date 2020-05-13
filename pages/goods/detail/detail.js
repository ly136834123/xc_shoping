const AV = require('../../../utils/av-weapp.js')
Page({

 
  /**
   * 页面的初始数据
   */
  data: {
    img:'',
    text:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option){
    let that = this;

    console.log("===11111========",option)
    that.setData({
      img:option.img,
      text:option.text
    })
  },
  // 添加购物车
  addCart:function(e){

  },
  // 查看购物车
  showCart:function(e){
       wx.reLaunch({
        url:'../../cart/cart'
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