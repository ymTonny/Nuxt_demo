<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Nuxt
      </h1>
      <h2 class="subtitle">
        hello {{name}}
      </h2>
      <p class="subtitle"><nuxt-link to="/user">GO to /user</nuxt-link></p>
      
    </div>
  </section>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  asyncData(context){
    context.store.dispatch("setcount")
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve({ name: "world" });
      },3000)
    })
  },
  components: {
    Logo
  },
  // mounted(){
  //   this.$nextTick(()=>{
  //    this.$nuxt.$loading.start() 
  //    setTimeout(()=>this.$nuxt.$loading.finish(),2000)
  //   });
    
  // }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>