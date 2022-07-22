// pages/music-play/music-play.js
import {Songdetail,Lyrics} from "../../service/api.music"
import {audiocontext} from "../../store/audiocontext"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
  songs:[],
  Lyrics:[],
  currentPage:0,
  duration:0,
  current:0,
  slidevalue:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
 //事件处理
 handSwiperChange(event){
  //获取相应的事件
  this.setData({currentPage:event.detail.current})
 },
  //播放接口
  exhibition(id){
    Songdetail(id).then(res=>{
      this.setData({songs:res.data.songs[0],duration:res.data.songs[0].dt})
      console.log(res.data.songs[0].ar[0].name)

     // console.log(res.data.songs[0].al.picUrl)
      })
  },
 pause(){
    console.log(1)
 },
  onLoad: function (options) {
   const listplay=options.ids
 //  console.log(listplay)
   //获取songs的图片和name
    this.exhibition(listplay)
   //动态计算内容的高度
   //这里可以将它保存到app.js中引用
     const height=wx.getSystemInfoSync()
    const screenHeight=height.screenHeight//屏幕的高度
    const statusBarHeight=height.statusBarHeight//状态栏的高度
    const currentheight=screenHeight-statusBarHeight-44;//这里的44指的是导航栏的高度
   
    this.setData({current:currentheight})

   //创建播放接口的上下文
  //停止上一层播放
   audiocontext.stop()
   audiocontext.src= `https://music.163.com/song/media/outer/url?id=${options.ids}.mp3`
   audiocontext.autoplay=true
   //获取当前的总进度长
   audiocontext.onCanplay(()=>{
     audiocontext.play()
   })
   audiocontext.onTimeUpdate(()=>{
     //这里为毫秒
     this.data.current=audiocontext.currentTime*1000
     //让滑块动
     console.log(this.data.duration)
     const slidervalue=this.data.current/this.data.duration*100
     console.log(slidervalue)
     this.setData({slidervalue})
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  onReady: function () {
   
  },
  //事件
 onslider(event){
   //获取slider变化的值
    const slidertime=event.detail.value
    //2计算播放的currentTime
       console.log(slidertime)
       console.log(this.data.duration)
    const currentTime=parseInt(this.data.duration*slidertime/10 ) 
    console.log(currentTime)
    //滑块停止
    //audiocontext.pause()
    audiocontext.seek(currentTime/10000)
 
    //记录最新的slidervalue
    this.setData({slidervalue:slidertime})

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