<template>
  <div v-if="loading" class="loading-page">
     <p>loading...</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      loading:false
    }
  },
  methods:{
    start(){
      this.loading = true;
    },
    finish(){
      this.loading = false;
    }
  }
}
</script>
<style scoped>
.loading-page{
  position: fixed;
  top: 0;
  left: 0;
  
  width:100%;
  height:100%;
  background:rgb(0,0,0);
  color:#fff;
  text-align: center;
  padding-top:200px;
  font-size:30rpx;
  font-family: sans-serif;
}
</style>

