import Vue from "vue";
import iView from "iview";
import locale from "iview/dist/locale/en-US"; // Change locale, check node_modules/iview/dist/locale
iView.LoadingBar.config({
  color:"red"
})
export default () => {
  Vue.use(iView, {
    locale
  });
}