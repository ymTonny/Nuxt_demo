<template>
  <div class="container">
    <!-- 题目 -->
    <pre>
  1.setTimeout(function(){
       console.log("a:"+a);
    },0);
    //如果把var换成let呢
    var a = 1;
    console.log("b:"+b);
    var b = 2;
    var c = 3;
    var d = 4;
    var e = 5;
    function fx(c){
        console.log("c:"+c);
    }
    function fn(e,d){
        console.log("d:"+d);
        setTimeout(function(){
            console.log("e:"+e);
        },10);
    }
    setTimeout(function(){
        console.log("b2:"+b);
    },20);
    fn(e,d);
    fx(c);
  2.for(var i=0;i<5;i++){
      setTimeout(function () {
        console.log(i)
      },1000*i)
    }
  3.let a = 3;
    let b = new Number(3);
    let c = b;
    console.log(a == b);
    console.log(a === b);
    console.log(b === c);
  4.class Person {
      static peoPle(newPeople) {
        this.newPeople = newPeople;
      }

      constructor({ newPeople = "tonny" } = {}) {
        this.newPeople = newPeople;
      }
    }

    const friend = new Person({ newPeople: "tom" });
    friend.peoPle("glieen");
  5.var obj = {
          id: "awesome",
          cool: function coolFn() {
             console.log( this.id );
          }
        };
    var id = "not awesome"  //如果换成let呢
    obj.cool();
    setTimeout( obj.cool, 100 );
    </pre>
 
    <!-- 底部导航 -->
    <div class="nav">
      <div class="nav-list" v-for="(item,index) in list" :key="index" >
        <img :src="item.img" @click="add(index)">
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
   data(){
     return {
       list:[{
         title:"nav1",
         img:"123"
       },{
         title:"nav2",
         img:"123"
       }],
       num:3
     }
   },
   methods:{
     add(e) {
      let num = e;
      if(e==0){
        this.num++;
       this.list.push({
         title:`nav${this.num}`,
         img:"123"
       })
      }
      if(e==this.list.length-1){
        console.log(e)
       this.list = this.list.slice(0,this.list.length-1)
      }
     }
   } 
  }
</script>
<style scoped>
.container{
  width:100%;
  padding-bottom:41px;
}
.nav{
  width:100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav .nav-list{
  width:100%;
  background:orange;
  border:1px solid red;
  color:white;
  text-align: center;
}
</style>

