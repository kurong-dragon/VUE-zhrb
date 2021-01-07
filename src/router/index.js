import Vue from 'vue'
import Router from 'vue-router'




// 2 定义路由
// import index from "../pages/index/index.vue"
// import home from "../pages/home/home.vue"


let index = () => Promise.resolve(import("../pages/index/index"))
let home = () => Promise.resolve(import("../pages/home/home"))


Vue.use(Router)
export default new Router({
  mode: "hash",

  routes: [
    // 首页
    {
      path: "/index",
      component: index,
      children: [
        {
          path: "home",
          component: home,
        },

        // 二重定向
        {
          path:"",
          redirect: "home"
        }
      ]
    },
    //3 重定向
    {
      path: "*",
      redirect: "/index"
    }
  ]


})
