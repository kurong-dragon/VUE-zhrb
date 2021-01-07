<template>
  <div class="list" >
    <div v-for="item in listtotal" :key="item.id">
    <div class="clearfix inner" v-for="itm in item" :key="itm.id">
      <div class="words fl">
        <p class="words_1">{{ itm.title }}</p>
        <p class="words_2">{{ itm.hint }}</p>
      </div>
      <div class="fl">
        <img class="imgx" :src="itm.images" alt="" />
      </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  props: ["list", "beforelist"],
  data() {
    return {
      listtotal: [],
    };
  },

  methods: {
    // 获取高度
    gettop() {
      // 整屏高度
      let tops = document.documentElement.clientHeight;
    },


    pushList(list) {
      this.listtotal.push(list);
      console.log(this.listtotal, "12344444");
    },
  },

  mounted() {
    this.gettop();
    window.onscroll = () => {
      let list = document.getElementsByClassName("list")[0];
      let winH = document.documentElement.clientHeight;
      let scrollH = document.documentElement.scrollTop;
      // console.log(, "list");
      // console.log();

      if (list.offsetHeight + list.offsetTop === winH + Math.ceil(scrollH)) {
        this.$emit("emit");
      }
    };
  },
};
</script>

<style scoped>
/* 时间 */
.list {
  width: 100vw;
  /* height: 40vh; */
}
.inner {
  /* margin: 0.2rem 0; */
  padding: 0.2rem 0;
}
.words {
  width: 70vw;
  margin-left: 4vw;
}
.words_1 {
  font: 0.18rem/0.22rem "楷体";
  width: 70vw;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.words_2 {
  font: 0.12rem/0.26rem "楷体";
  width: 70vw;
  color: #ccd1d1;
}
.imgx {
  width: 0.7rem;
  height: 0.7rem;
}
</style>