<template>
  <div>
    <ul>
      <li v-for="(item,index) in visits" :key="index">
        <i>{{ item.date | hours }}</i> - {{ item.path }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  filters: {
    hours(date){
      return date.split("T")[1].split(".")[0]
    }
  },
  computed:{
    visits() {
      return this.$store.state.demo.visits
    }
  }
}
</script>

