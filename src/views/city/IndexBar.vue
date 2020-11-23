<template>
  <van-index-bar :index-list = 'indexes'>
    <template v-for=" char in indexes">
      <van-index-anchor :index="char"  :key='char.a'/>
      <van-cell @click="$emit('changeCity',city.cityId,city.name)" :title="city.name"  v-for="city in dataList[char]" :key='city.id'/>
    </template>
  </van-index-bar>
</template>
<script>
export default {
  props: {
    dataList: Object,
    indexes:Array
  },
  created() {
    console.log("获取到了吗", this.dataList);
  }
};
</script>
<style scoped lang='scss'>
</style>