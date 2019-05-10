export default {
  state:{
    count:1
  },
  mutations:{
    SETCOUNT(state,obj){
      console.log(state,obj)
    }
  },
  actions:{
    setcount(context){
      console.log("1",context)
      let a=1;
      context.commit({
        type:"SETCOUNT",
        a
      })
    }
  }
}