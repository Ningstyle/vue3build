import router from '@/router/index.js'
 /*检查跳转改路由之前是否需要登录*/
router.beforeEach(async (to, from,next) => {
  window.document.title = to.meta.title == undefined?to.name:to.meta.title
  /*判断是否存在这个路由*/
  if(to.matched.length === 0){
    next('/404')
  }else{
    /* 2.判断当前是不是登录页面*/
    if(to.fullPath!='/login'){
      /* 3.判断当前有没有登录，例如判断是否存在token*/
      if(localStorage.getItem('token')){
        next()
      }else{
        /*4.判断跳转的路由是否需要登录*/
        if(to.meta.requireAuth){
          next({
            path:'/login'
          })
        }else{
          next()
        }
      }
    }else{
      next()
    }
  }
})