<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Nuxt
      </h1>
      <h2 class="subtitle">
        hello {{users.username}},{{users.username=='world'?'请登录':""}}
      </h2>
      <Form v-if="users.username=='world'" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
         <Form-item label="用户名" prop="username">
            <Input type="text" icon="ios-infinite" v-model="formValidate.username" placeholder="请输入用户名..." class="username"/>
         </Form-item>
         <Form-item label="密码" prop="pwd">
            <Input type="password" icon="ios-eye" v-model="formValidate.pwd" placeholder="请输入密码..." class="password"/>
         </Form-item>
         <Form-item>
            <Button type="primary" :loading="loading" @click="handleSubmit">登陆</Button>
         </Form-item>
      </Form>
      <!-- <i-button type="success" :loading="loading" @click="Loading">登陆</i-button> -->
      <p class="subtitle" @click="Gouser">GO to /user</p>
      
    </div>
  </section>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  asyncData(context){
    context.store.dispatch("setcount")
    console.log(context.store.state.demo.users,"222")
    return new Promise(resolve=>{
      //setTimeout(()=>{
        resolve({ name: context.store.state.demo.users.username|| "world" });
      //},3000)
    })
  },
  data(){
    return {
      loading:false,
      formValidate:{
       username:"",
       pwd:""
      },
      ruleValidate:{
        username:[
          { required:true, message:"用户名不能为空", trigger:"blur" }
        ],
        pwd:[
          { required:true, message:"密码不能为空",trigger:"blur"}
        ]
      }
    }
  },
  computed:{
    users() {
      return this.$store.state.demo.users
    }
  },
  methods:{
    // 登陆
    handleSubmit(){
      this.loading = true;
      setTimeout(()=>{
         this.$refs.formValidate.validate((valid)=>{
           this.loading = false
            if(valid){
              this.$Notice.success({
                title:"提交成功",
                desc:"去个人中心瞧一瞧吧"
              })
              this.$store.dispatch("setuser",this.formValidate);
            }else{
              this.$Notice.error({
                title:"提交失败",
                desc:"请检查信息是否填写完整"
              });
              
            }
          })
      },2000)
    },
    Loading(){
      // this.loading = true;
      // this.$Notice.info({
      //   title:"hello",
      //   desc:"welcome nuxt.js"
      // })
    },
    Gouser(){
      console.log(this);
      if(this.users.username=='world'){
        this.$Notice.warning({
          title:"请先登陆",
          desc:"登陆过后才能进入用户中心哟"
        })
      }else{
       this.$router.push("/user")
      }
    }
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
  cursor: pointer;
}
.links {
  padding-top: 15px;
}
</style>