<template>
  <div class="user">
     嵌套路由  {{name}}
     <nuxt-child></nuxt-child>
  </div>
</template>
<script>
  export default {
    layout:"users",
    asyncData(context){
      console.log(context)
      return new Promise((resolve)=>{
        //  测试顶部加载条
          setTimeout(() => {
                resolve({name:"测试数据加载"})
          }, 3000);
      })
    },
  }
</script>
<style scoped>
.user{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>


