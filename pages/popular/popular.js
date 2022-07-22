// pages/popular/popular.js
import {rankevent} from "../../store/ranl.store"
import {detail} from "../../service/api.music"
Page({

  /**
   * 页面的初始数据
   */
  data: {
  de:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   /* const type=options.type
    console.log(options.id)
    //拿到歌曲详情的id
    if(type==="menu"){
      const id=options.id
     // console.log(id)*/
     console.log(options.id)
      detail(options.id).then(res=>{
     
      // console.log(res.data.playlist.tracks)
        this.setData({de:res.data.playlist.tracks})
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