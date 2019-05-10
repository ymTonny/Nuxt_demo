import iView from 'iview';
import 'iview/dist/styles/iview.css';
export default async ({ app })=>{
  app.router.afterEach((to,from,next) => {
     iView.LoadingBar.finish();
     console.log(iView.LoadingBar)
  });
  //路由开始
  app.router.beforeEach((to,from,next) => {
    iView.LoadingBar.start();
    next()
  });
}
