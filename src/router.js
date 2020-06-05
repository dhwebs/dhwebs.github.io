import Vue from 'vue'
import Router from 'vue-router'
import homeMenu from './views/homeMenu.vue'
import notfind from './views/404'


Vue.use(Router)

 const router=new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect: '/homeMenu',
      component:homeMenu,
    },
    {
      path: '/homeMenu',
      name: 'homeMenu', 
      meta:{requireAuth: true},// 添加该字段，表示进入这个路由是需要登录的
      component: homeMenu,   
    },
    {
      path:'*',
      name: 'notfind', 
      component: notfind
    }
  ]
})

// import store from './store'
// router.beforeEach((to, from, next) => {
  // if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
    // if (sessionStorage.getItem('spId')) { // 判断当前的spid是否存在 ； 登录存入的spId
    //   if(store.state.pageAuth[`${to.fullPath}`] || to.fullPath == '/welcome' || to.fullPath == '/main'){
    //     next();
    //   }else{
    //     next({
    //       path:'/notfind'
    //     })
    //   }
    // }
    // if(to.fullPath == '/welcome' || to.fullPath == '/main'){//判断进入登录页面
    //   setTimeout(()=>{//延时获取spId
    //     if(sessionStorage.spId){
    //     next();}
    //     else{//延时获取spId失败跳转404
    //       next({
    //         path:'/notfind'
    //       })
    //     }
    //   },200) 
    // }
  // }else {
  //   next()
  // }
// })
export default router