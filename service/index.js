//二次封装网络请求
const BASEURL='https://coderwhy-music.vercel.app/'
class HYmusic {
    request(url,method,params){
      return new Promise((resolve,reject)=>{
        wx.request({
          url: BASEURL+url,        
         method:method,
          data:params,
          success:function(res){
          resolve(res)
          },fail:function(res){
    reject(res)
          }
        })
      })
     
    }
     get(url,params){
        return this.request(url,'GET',params)
     }
     post(url,data){
        return this.request(url,'POST',data)
     }
     
}
const HYmuic=new HYmusic()


export default HYmuic

