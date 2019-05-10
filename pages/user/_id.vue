<template>
    <div>
       <h1>name：{{project.name}}</h1>
       <h2>email：{{project.email}}</h2>
       <p>phone：{{project.phone}}</p>
       <p><nuxt-link to="/">List to index</nuxt-link></P>
    </div>
</template>
<script>
export default {
  validate({ params }){
    return !isNaN(+params.id)
  },
  async asyncData({ app,params,error }){

    const { data } = await app.$axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`);
    try{
      return new Promise(resolve=>{
          setTimeout(() => {
            resolve({ project: data })
          }, 2000);
       }) 
    } catch(e) {
       error({ message: "User not found", statusCode: 404 })
    }
  },
  mounted(){
    console.log(this)
  }
}
</script>
<style scoped>

</style>


