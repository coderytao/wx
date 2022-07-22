
  export function _debounce(fn,delay){
  let timer=null
   const debonce=function() {
     if(timer) clearTimeout(timer)
   setTimeout(()=>{
   fn()
   },delay)

   }
   return debonce
}


