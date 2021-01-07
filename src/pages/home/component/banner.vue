<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index"
        ><img :src="item.image" alt="" />
        <div class="box">
          <p class="title">{{ item.title }}</p>
          <p class="hint">{{ item.hint }}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ["banner"],
  methods: {
    topbanner() {
      // 滚动条高度gd
      let gdtop = document.documentElement.scrollTop;
      console.log(gdtop, "////|||||???");
    },
  },
  mounted() {
    this.topbanner();
  },
};
</script>

<style scoped>
.banner {
  height: 7.2rem;
}
/* 轮播图片 */
img {
  width: 100%;
  height: 100%;
}
/* 文字 */
.box {
  width: 100vw;
  position: absolute;
  bottom: 0.5rem;
  left: 0;
}
.title {
  font: bold 23px/30px "楷体";
  margin: 0 5vw;
  text-align: left;
}
.hint {
  margin: 0 5vw;
  font: 16px "楷体";
  color: #e5e7e9;
  text-align: left;
}
.my-swipe .van-swipe-item {
  /* height: 50vh; */
  color: #fff;
  font-size: 0.2rem;
  line-height: 1.5rem;
  text-align: center;
  background-color: #39a9ed;
  position: relative;
}
</style>