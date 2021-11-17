<template>
  <div class="content-box">
    <el-button @click="getApiTest">点击测试api调用</el-button>
    <li v-for="(item,index) in reault">{{item}}</li>
    <p>vuex存储的userInfo:{{$store.state.userInfo}}</p>
    <el-button @click="upUserInfo">点击改变vuex数据</el-button>
    <el-button @click="toLogin">跳转登录</el-button>
  </div>
</template>

<script>
import {getMoneyHs} from '@/api/index.js'
export default {
  name: 'content-box',
  data(){
    return {
      reault:[]
    }
  },
  methods:{
    getMoneyHs(data){
      getMoneyHs(data).then(res=>{
        this.reault = res.data.results
      }).catch(err=>{})
    },
    getApiTest(){
      this.getMoneyHs({'Current':0,'PageCount':2})
    },
    upUserInfo(){
      this.$store.commit('UPUSERINFO','改变后的值')
    },
    toLogin(){
      this.$router.push({
        path:'login'
      })
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
