// component/area-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'推荐歌曲'
    },
    text:{
      type:String,
      value:'更多'
    },
    recom:{
      type:String,
      value:"热们榜单"
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
  onhandmore(event){
    const id=event.currentTarget.dataset.item.al.id
    console.log(id)
 // console.log(event.currentTarget.dataset.item.item.al.id)
     wx.navigateTo({
       url: '../home-detail/home-detail=?'+item.id+"&type=rank",
     })
  }
  }
})
