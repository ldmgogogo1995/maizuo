<template>
  <div class="cinema-header">
    <div class="header-left" @click="$router.go(-1)">
      <img src="@/assets/imgs/goback.png" />
    </div>
    <div class="header-title">{{cinema.name}}</div>
  </div>
</template>
<script>
export default {
  props: {
    cinema: Object
  }
};
</script>
<style lang="scss" scoped>
.header-left {
  position: fixed;
  top: 0;
  height: 0.88rem;
  line-height: 0.88rem;
  padding-left: 0.3rem;
  z-index: 303;
  img {
    width: 0.22rem;
    height: 0.36rem;
  }
}
.header-title {
  position: relative;
  text-align: center;
  font-size: 0.34rem;
  color: #191a1b;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding: 0 0.3rem;
  background: #fff;
  top: 0;
  height: 0.88rem;
  line-height: 0.88rem;
  z-index: 302;
}
</style>