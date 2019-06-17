import iView from 'iview';
import 'iview/dist/styles/iview.css';
export default async ({ app,redirect })=>{
  app.router.afterEach((to,from,next) => {
     iView.LoadingBar.finish();
  });
  //路由开始
  app.router.beforeEach((to,from,next) => {
    iView.LoadingBar.start();
    console.log(to,app)
    // if(to.path!="/"&&app.store.state.demo.users.username=='world'){
    //   redirect("/");
    //   // iView.LoadingBar.finish();
    //   return false;
    // }else{
      next()
    // }
  });
}
