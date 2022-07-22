// pages/main-video/index.js
import {getTopMv} from "../../service/api.video"
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    array:[],
    second:[],
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
 //封装请求的方法
  onLoad: function (options) {
   
   this.getTopMvData(0)
  },
  click(event){
    
   const id= event.currentTarget.dataset.item.id
   console.log(id)
    wx.navigateTo({
      url: '../main-detail/main-detail?id='+id,
     
    })
   },
  getTopMvData(offset){
    getTopMv(offset).then(res=>{
      this.setData({array:res.data.data})
      //加载上拉动画
      //wx.showNavigationBarLoading()
     
      
     // console.log(offset)
    })
  },

  //下拉请求最新的数据
  //原理用现在的数据去覆盖原来的数据
  onPullDownRefresh:function(offset){
    //取消下拉刷新动画
  
   
    if(offset===0){
      wx.hideNavigationBarLoading({
        success: (res) => {},
      })
      wx.stopPullDownRefresh()
    }


    getTopMv(0).then(res=>{
     
      this.setData({array:res.data.data})
      this.second=({array:res.data})
      console.log(this.second)
    })
  },
  onReachBottom:function(){
if(!this.data.hasMore) return//当为true请求,为flase不再请求，如果这里不再请求返回数据
  
 getTopMv(this.data.array.length).then(res=>{//这里一次只能指定请求子节长度为10的数据，利用hasmore来请求。
       this.setData({array:this.data.array.concat(res.data.data)})
       //当页面不再刷新时，不返回。
       this.setData({hasMore:res.data.hasMore})
     })
  },

  

 

 


  
})