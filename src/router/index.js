import {createRouter,createWebHistory,createWebHashHistory} from  'vue-router'
import RoutersPage from '@/router/RouterPage/index'
import RouterBase from '@/router/RouterPage/base'
const router = createRouter({
  history:createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes:[...RoutersPage,...RouterBase]
})
export default router
