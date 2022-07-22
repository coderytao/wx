import HYmuic from "./index"
//
export function search(type){
  return HYmuic.get("/banner",{
   type
  })
}

//搜索接口
export function searchiput(){
  return HYmuic.get("/search/hot",{

  })
}
//搜索建议
export function suggestion(keywords,type){
  return HYmuic.get("/search/suggest",{
   keywords,
   type:"mobile"
  })
}
export function playlist(id){
  return HYmuic.get("/playlist/detail",{
    id
  })
}
export function recomondlist(cart,limit,offset){
  return HYmuic.get("/top/playlist",{
    cart,
    limit,
    offset
  })
}
//播放接口
export function Songdetail(ids){
    return HYmuic.get("/song/detail",{
      ids
    })
}
//歌词信息
export function Lyrics(id){
  return HYmuic.get("/lyric",{
    id
  })
}
//歌单详情
export function detail(id){
  return HYmuic.get("/playlist/detail",{
    id
  })
}
//搜索接口的keyword
export function keyword(keywords){
  return HYmuic.get("/search",{
      keywords,
      
  })
}