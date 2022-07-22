// pages/main-detail/main-detail.js
import {getsecond} from "../../service/api.video"
import {getMvUrl} from "../../service/api.video"
import {getrelated} from "../../service/api.video"
Page({

  /**
   * 页面的初始数据
   */
  data: {
   getline:[],
   getmv:[],
   get:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //封装三个api接口
  getseverApi:function(id){
     //请求mv的播放地址id
    //这里会传入响应的options
  getsecond(id).then(res=>{
     console.log(res.data.data)
     this.setData({getline:res.data.data})
    }),
      //请求响应的播放视频数据 mvid
  
    getMvUrl(id).then(res=>{
     console.log(res.data.data)  
      this.setData({get:res.data.data})
     })
 //请求响应的推荐内容
     getrelated(id).then(res=>{
    this.setData({getmv:res.data.data})
 //  console.log(res.data.data)
     })

  },
  onLoad: function (options) {
   
    const id=options.id
    this.getseverApi(id)
   /*this.getMvUrl(id)
   this.getrelated(id)*/
   
  },
  onReachBottom:function(){
    
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