<template>
  <div>登录</div>
  <el-button @click="toHome">返回首页</el-button>
</template>

<script>
export default{
  data(){
    return {

    }
  },
  methods:{
    toHome(){
      this.$router.push({
        path:'/'
      })
    }
  }
}
</script>

<style>
</style>
