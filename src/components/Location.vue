<template>
  <div>
    <button>获取定位信息</button>
    <div id="map-container"></div>
  </div>
</template>
<script>
import location1 from "@/utils/location";
export default {
  data() {
    return {};
  },
  methods: {
    /**获取地图定位*/
    getLocation() {
      let _that = this;
      let geolocation = location1.initMap("map-container",(cityName)=>{
        console.log('location.vue组件中拿到的',cityName)
        if($store.state.cityName){
          return this.$emit('changeCity',$store.state.cityName)
        }
        this.$emit('changeCity',cityName)  // 向父组件传递当前城市
      }); //定位
    },
  },
  mounted() {
    this.getLocation();
  }
};
</script>