
// pages/search-music/search.js
import {searchiput} from "../../service/api.music"
import {suggestion} from "../../service/api.music"
import {_debounce} from "../../store/index"
import { keyword} from "../../service/api.music"

const getdebouce=_debounce(suggestion,3000)

//console.log(getdebounce)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchinput:[],
    hotsearch:{
      type:String,
      value:"热门搜索"
    },
    suggest:[],
    show:[],
    search:"",
    result:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    searchiput().then(res=>{
   // console.log(this.data.number)
      this.setData({searchinput:res.data.result.hots})
    
    })
  },
  
  //事件
  handchage(event){
    const itemevent=event.detail
    if(!itemevent.length) {
      this.setData({show:[]})
      return
    }
    
    suggestion(itemevent).then(res=>{
     this.data.number=itemevent
     console.log(this.data.number)
    
    
      this.setData({show:res.data.result.allMatch})
    })
   
   },
  
  //循环遍历事件
  handSearch(){
   
   keyword(this.data.number).then(res=>{
     
    this.setData({result:res.data.result.songs})
   })
  },
  hotsearch(event){
    console.log(event.currentTarget.dataset.item.first)
   searchiput().then(res=>{
         this.setData({searchinput:res.data.result.hots})
         
       })
     keyword(event.currentTarget.dataset.item.first).then(res=>{
        this.setData({result:res.data.result.songs})
     })

      this.setData({search:event.currentTarget.dataset.item.first})
  },
  //搜索歌曲
  onhandclick(event){
       console.log(event.currentTarget.dataset.item.keyword)
       // console.log(event)
         //const search=this.data.result
        keyword(event.currentTarget.dataset.item.keyword).then(res=>{
     
          this.setData({result:res.data.result.songs})
         })
         this.setData({search:event.currentTarget.dataset.item.keyword})  
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