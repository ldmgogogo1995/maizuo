<template>
    <!-- <div class="banner-wrap">
        <img src="@/assets/imgs/banner1.jpg">
    </div> -->
<van-swipe :autoplay="3000" class="banner-wrap" indicator-color="white">
  <van-swipe-item v-for = 'item in list' :key='item.bannerId'> 
      <!-- 记得脚手架里面的v-for要加KEY值 -->
      <img :src="item.imgUrl" >
   </van-swipe-item>
  
</van-swipe>
</template>
<script>
import { getBanner } from '@/api/film'
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.getBannerData()
        
    },
    methods :{
        getBannerData(){
            getBanner().then(result=>{
                
                if(result.status === 0){
                    this.list = result.data
                }
                // console.log(this.list)
            })
        }
    }
}
</script>
<style scoped>
    .banner-wrap{
    height: 4.2rem;
    background-color:#ccc;
}
.banner-wrap img{
    width:100%;
}
</style>