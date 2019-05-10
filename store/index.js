import Vue from "vue"
import Vuex from "vuex"

// 引入模块
import demo from "../store/modules/demo"
Vue.use(Vuex);
const store = ()=> new Vuex.Store({
  modules:{
    demo
  }
})
export default store