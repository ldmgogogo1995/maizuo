<template>
  <router-link class="nav-bar" :to='{name:"cinemaList",params:{id,cityId:123}}'>
    <div class="go-shedule">选座购票</div>
  </router-link>
</template>
<script>
export default {
  props: {
    filmInfo: Object,
    id:Number,
  }
};
</script>
<style scoped lang='scss'>
    .nav-bar{
    height: 0.98rem;
    position: fixed;
    bottom: 0px;
    width: 100%;
    .go-shedule{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.98rem;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 0.32rem;
    line-height: 0.98rem;
    }  
    }
</style>