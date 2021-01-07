<template>
  <div>
    <!-- 轮播图 -->
    <m-banner :banner="banner"> </m-banner>
    <!-- 列表 -->
    <m-list :list="list" ref="list" @emit="emit" :beforelist="beforelist">
    </m-list>
  </div>
</template>

<script>
import { reQlatest, reQbefore } from "../utils/http";
import mBanner from "./component/banner";
import mList from "./component/list";
export default {
  components: {
    mBanner,
    mList,
  },
  data() {
    // 数据列表
    return {
      banner: [],
      list: [],
      beforelist: [],
    };
  },
  methods: {
    // 获取轮播图
    reqbanner() {
      reQlatest().then((res) => {
        this.banner = res.data.top_stories;
      });
    },
    // 获取当前列表
    reqlist(num) {
      reQlatest(num).then((res) => {
        this.list = res.data.stories;
        this.$refs.list.pushList(res.data.stories);
        console.log(this.list, "////////.....");
      });
    },
    // 获取之前的新闻
    reQbeforelist() {
      reQbefore(this.getTime()).then((res) => {
        this.beforelist = res.data.stories;
         this.$refs.list.pushList(res.data.stories);
        console.log(this.beforelist);
      });
    },
    // emit获取数据
    emit() {
      this.reQbeforelist();
    },
    // 时间补0
    timeAdd0(m) {
      if (m < 10) {
        m = "0" + m;
      }
      return m;
    },
    // 获取当前时间
    getTime() {
      let date = new Date();
      let b = this.timeAdd0(date.getFullYear()).toString();
      let c = this.timeAdd0(date.getMonth() + 1);
      let d = this.timeAdd0(date.getDate());
      let num = b + c + d;
      return num;
    },
  },

  mounted() {
    this.reqbanner();
    this.reqlist();
  },
};
</script>

<style>
</style>