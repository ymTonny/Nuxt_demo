import Vue from "vue"
import Vuenotifications from "vue-notifications"
import miniTostar from "mini-toastr"

const toastType = {
  success:"success",
  info: "info",
  error: "error",
  warn: "warn"
}

miniTostar.init({types:toastType})

const toast = function({ title,message,type,timeout,cb }){
    return miniTostar[type](title,message,timeout,cb)
}

const options = {
  success: toast,
  info: toast,
  error: toast,
  warn: toast
}
Vue.use(Vuenotifications,options)