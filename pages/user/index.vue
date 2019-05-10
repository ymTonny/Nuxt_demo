<template>
    <div>
      <!-- <nuxt-link to="/user/1">user</nuxt-link> -->
      <h2>User</h2>
      <ul>
        <li v-for="item in users" :key="item.id">
           <nuxt-link :to="'/user/'+item.id">{{item.name}}</nuxt-link>
        </li>
      </ul>
    </div>
</template>
<script>
export default{
   async asyncData({ app }){
    const { data } = await app.$axios.get('https://jsonplaceholder.typicode.com/users');
    return new Promise(resolve=>{
      setTimeout(()=>{
          console.log(data)
          resolve({users: data})
      },3000)
    })
   }
}
</script>
<style scoped>
ul li{
  list-style:none;
}
</style>

