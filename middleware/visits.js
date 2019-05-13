export default function({ store,route }){
   console.log("调用中间件",store,route)
   store.dispatch("addvisit",route.path)
}