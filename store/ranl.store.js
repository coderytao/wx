import {HYEventStore} from "hy-event-store"
import {playlist} from "../service/api.music"
const listarray={
  3779629:"lihst",
  3778678:"toplist",
  2884035:"leftlist",
  19723756:"rightlist"

}
const rankevent=new HYEventStore({
  state:{
    //
   lihst:{
    
   },
   //歌曲排行
   toplist:{

   },
   //榜单
   rightlist:{

   },
   leftlist:{

   }
  },
  actions:{
    //遍历循环歌曲榜单0，1，2，3
    
    getevent(ctx){
      //遍历榜单数据
      for(let index in listarray){
        const transformed=parseInt(index)
        playlist(transformed).then(res=>{
          const rankingName=listarray[index] 
          ctx[rankingName]=res.data.playlist
          
        })
      }
     
    }
  }
})
        /*const bar=res.data.playlists
        ctx.lihst=bar
     /* for(let i=0;i<4;i++){
        
        
          switch(i){
            
            case 0 :ctx.lihst=res.data.playlists 
            break;
            case 1:ctx.toplist=res
            break;
            case 2:ctx.rightlist=res.data.playlists
            break
            case 3:ctx.leftlist=res.data.playlists
          }
       })
      }*/
    
      
  

export {
  rankevent
}