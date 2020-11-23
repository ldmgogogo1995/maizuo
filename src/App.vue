<template>
  <div id="app">
    <router-view></router-view>
    <footer-nav-bar v-if="isFooterShow"></footer-nav-bar>
  </div>
</template>
<script>
import FooterNavBar from '@/components/FooterNavBar'
export default {
  components:{
    FooterNavBar
  },
  data(){
    return{
      isFooterShow:true
    }
  },
  watch:{
    '$route':{
      handler(val){
        this.isFooterShow = val.meta.hasFooter
      },
      deep:true,
      immediate:true
    }
  }
}
</script>
<style lang="scss">

</style>
