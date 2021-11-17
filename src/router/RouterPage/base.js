export default [
  {
    path:'/404',
    name:'404',
    component:()=> import ('@/page/base/404.vue'),
    meta:{
      title:'404',
      requireAuth:false,
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=> import ('@/page/base/login.vue'),
    meta:{
      title:'登录',
      requireAuth:false,
    }
  }
]