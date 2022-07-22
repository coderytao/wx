// component/header-detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     item:{
       type:Array,
       value:[]
     },
     title:{
       type:String,
       value:"热门歌单"
     }
     
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */

  methods: {
     onhand(event){
       const item=event.currentTarget.dataset.item
    //  console.log(item.name)
       console.log(item.id)
wx.navigateTo({
 url: "../popular/popular?id="+item.id
 //"../pages/popular/popular?id="+item.id+"&type=menu"
})

       /*
console.log(id)
    wx.navigateTo({
      url: '../main-detail/main-detail?id='+id,
     
    })
       */
     }
  }
})
