<template>
  <div>
    <div class="box clearfix">
      <div class="fl">
        <p></p>
        <p></p>
      </div>
      <div class="fl"><p></p></div>
    </div>
    <!-- index下的二级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 100vw;
  height: 10vh;
}

</style>