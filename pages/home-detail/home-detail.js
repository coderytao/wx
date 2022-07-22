// pages/home-detail/home-detail.js
import {rankevent} from "../../store/ranl.store"
import {detail} from "../../service/api.music"
Page({

  /**
   * 页面的初始数据
   */
  data: {
   rank:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   /* console.log(options.id)
    detail().then(res=>{
      console.log(res)
  })*/

    //this.setData({list})
    rankevent.onState("lihst",this.getlist)
    rankevent.dispatch("getevent")
    //保存数据
    
   
    
  },
 getlist:function(res){

   this.setData({rank:res.tracks})
  
 },
 playlist(event){
   const playli=event.currentTarget.dataset.item.id
  // console.log(playli)
  wx.navigateTo({
    url: '../music-play/music-play?ids='+playli,
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