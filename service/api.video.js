//三次封装网络请求
import HYmuic from "./index"

export function getTopMv(offset,limit=10){
  return HYmuic.get("/top/mv",{
    offset,
    limit
  })
}

//请求mv的播放地址
/*
@param {number} id 

*/
export function getsecond(id){
  return HYmuic.get("/mv/url",{
    id
  })
}

//请求mv的播放地址
export function getMvUrl(mvid){
  return HYmuic.get("/mv/detail",{
   mvid
  })
}
//请求相关视频
export function getrelated(id){
  return HYmuic.get("/related/allvideo",{
    id
  })
}