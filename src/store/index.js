import { createStore } from "vuex";
export default createStore({
  state: {
		userInfo:'测试vuex'
  },
  mutations: {
		UPUSERINFO(state,e){
			state.userInfo=e
		},
  },
  actions: {
  },
  modules: {
  }
})
