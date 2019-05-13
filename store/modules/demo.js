export default {
  state:{
    count:1,
    visits:[],  //middleware中间件测试
    users:{
      username:"world",
      pwd:""
    }
  },
  mutations:{
    SETCOUNT(state,obj){
      console.log(state,obj)
    },
    ADDVISIT(state,path){
      state.visits.push({
        path:path.obj,
        date:new Date().toJSON()
      })
      console.log(state)
    },
    SETUSER(state,val){
      console.log(val,"设置用户信息")
      state.users.username = val.obj.username;
      state.users.pwd = val.obj.pwd;
      console.log(state)
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
    },
    addvisit(context,obj){
      console.log("addvisit",context,obj)
      context.commit({
        type:"ADDVISIT",
        obj
      })
    },
    // 存入用户信息
    setuser(context,obj){
      context.commit({
        type:"SETUSER",
        obj
      })
    }
  }
}