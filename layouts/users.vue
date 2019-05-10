<template>
  <div class="user_layout">
    <div class="_user_layout">自定义布局layouts</div>
    <nuxt/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.user_layout{
  width:100%;
  height:100%;
  text-align: center;
  position:absolute;
  top:0;
  left:0;
  background:black;
  color:#fff;
  font-size:30px;
}
._user_layout{
  width:100%;
  background:orange;
}
</style>


