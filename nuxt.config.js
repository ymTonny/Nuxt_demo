import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // 自定义loading时改为 @/components/Loading
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css',
    "assets/main.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'@/plugins/iview'},
    {src:"@/plugins/after",ssr:false }   //配置插件iview中的loading
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // 配置axios 才能在组件中使用axios
    prefix:"/api/",
    proxy:true
  },
  proxy: {
    "/api/":{
      target:"http://localhost:3000",
      pathRewrite:{
        "^/api/" : ""
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
