// component/navigation-bar/navigation-bar.js
Component({
  /**
   * 组件的属性列表
   */
  //多个插槽必须设置options
  options:{
    multipleSlots:true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    text:{
      type:String,
      value:"歌曲"
    },
  globalData:{
statusBarHeight:0
  },
  globar:[]
  },
  lifetimes:{
    ready:function(){
      //获取状态栏的高度
     const info= wx.getSystemInfoSync()
   this.data.globalData.statusBarHeight=info.statusBarHeight//拿到状态栏的高度
   this.setData({globar:this.data.globalData.statusBarHeight})
   
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
