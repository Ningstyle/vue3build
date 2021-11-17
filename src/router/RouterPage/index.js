export default [
  {
    path:'/',
    name:'index',
    component:()=>import ('@/page/pages/index/index.vue'),
    meta:{
      title:'首页',
      requireAuth:false,
    }
  }
]