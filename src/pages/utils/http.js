import axios from "axios";
// import { qs } from "qs";
// import { Vue } from "vue";

// 使用开发者环境
let baseUrl = "/api"

// 生产环境
// let baseUrl = ""
// Vue.prototype.$pre = ""

// 响应拦截
axios.interceptors.response.use(res => {
    console.group("本次请求的地址是" + res.config.url)
    console.log(res),
        console.groupEnd()
    if (res.data.list === null) {
        res.data.list = []
    }
    return res
})


// 获取最新新闻
export let reQlatest = () => {
    return axios({
        url: baseUrl + "/api/4/stories/latest",
        method: "GET",
    })
}

// https://news-at.zhihu.com/api/4/stories/before/{yyyyMMdd}

//获取之前的新闻
// 动态传参拼接
export let reQbefore = (num) => {
    return axios({
        url: baseUrl + "/api/4/stories/before/" + num,
        method: "GET",



    })
}