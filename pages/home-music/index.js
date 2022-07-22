// pages/home-music/index.js
import {search,recomondlist} from "../../service/api.music"
import {rankevent} from "../../store/ranl.store"
Page({

  /**
   * 页面的初始数据
   */
  data: {
   getsearch:[],
   getlist:[],
  recommend:[],
  top:[],
  left:[],
  right:[],
  mytext:'热们榜单',
  secondlist:[],
  li:[]
  },
  methods: {
    
      
  },
  //事件
  
  /*onhand:function(event){
   const item=event.currentTarget.dataset.item
   console.log(item)
  },*/
  onsearch:function(){
//console.log(11)
     wx.navigateTo({
       url: '../search-music/search',
     })
  },
  onhandmore:function(event){
    const id=event.currentTarget.dataset.item.al.id
   console.log(event.currentTarget.dataset.item.al.id)
   wx.navigateTo({
     url:"../home-detail/home-detail?="+id
   })
   
  }
  /**
   * 
   * 生命周期函数--监听页面加载
   */,
  mysearch:function(){
    search().then(res=>{
      this.setData({getsearch:res.data.banners})
  })
  },
  //查询轮播图的高度
  image:function(){
    const query = wx.createSelectorQuery()
    query.select('.swpier-image').boundingClientRect()
   
    query.exec(res=>{
     const rect=res[0]
     //console.log(rect)
    })
  },

  onShow: function (options) {
    this.mysearch()
 //下拉榜单
    recomondlist("全部","50","50").then(res=>{
    
      this.setData({recommend:res.data.playlists})
    }),
    //排行
    recomondlist("古风","50","10").then(res=>{
    
      this.setData({secondlist:res.data.playlists})
    }),

    //调用top榜单页面,0,1,2,3
    rankevent.dispatch("getevent")
    rankevent.onState("lihst",res=>{
      //只截取榜单的六条数据
      if(!res.tracks) return 
     const bar=res.tracks.slice(0,20)
      console.log(bar)
       this.setData({getlist:bar})
    })
    rankevent.onState("rightlist",
    
    this.getonright
  )
    //原创
    rankevent.onState("leftlist",
    
      this.getonranking
    )
    
  //热歌
  rankevent.onState("toplist",
   
    this.getontop
  )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  getonright:function(res){
    const rightlist=res.name
    if(!res.tracks) return
    //console.log(res.tracks.slice(0,3))
    const righttrack=res.tracks.slice(0,3)
    const rightcover=res.coverImgUrl
    const rightrank={rightlist,righttrack,rightcover}
    this.setData({right:rightrank})
  },
  getontop:function(res){
  //热歌榜
  const toplist=res.name
  if(!res.tracks) return
  //console.log(res.tracks.slice(0,3))
  const track=res.tracks.slice(0,3)
  const cover=res.coverImgUrl
  const rank={toplist,track,cover}
  this.setData({top:rank})
  },
    getonranking:function(res){
     //原创榜
     
     const li=res.name
     if(!res.tracks) return
     var tracks=res.tracks.slice(0,3)
     //console.log(tracks)
     const coverimg=res.coverImgUrl
     //const ranking={top,tracks,coverimg}
     this.setData({left:tracks,coverimg,li})
     
    },
    
 
  },
  

)