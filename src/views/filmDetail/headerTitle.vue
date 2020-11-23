<template>
    <header class="header-title" >
        <!-- <van-sticky @scroll='onScroll' > -->
                <img src="@/assets/imgs/back.png" @click="$router.go(-1)" class="goBack">
                <span class="header-title-center">{{filmInfo.name}}</span>
        <!-- </van-sticky> -->
    </header>
</template>
<script>
export default {
    props:{
        filmInfo:Object
    },
    data(){
        return{
            isShow:false
        }
    },
    methods:{
        // onScroll(val){
        // //     console.log(val)
        // //     this.isShow = val.isFixed
        // }
    }
}
</script>
<style scoped lang='scss'>
.header-title{
    position: fixed;
    width: 100%;
    height: 0.88rem;
    transition: all .3s ease;
    color: #191a1b;
    // background: white;
    line-height:0.88rem; 
    font-size: 0.34rem;
    text-align: center;
    z-index: 999;
    .goBack{
            width: 0.6rem;
            height: 0.6rem;
            position: absolute;
            top: 0.1rem;
            left:0.1rem;
    }
    .header-title-center{
        width: 100%;
        height: 100%;
        display: block;
        

    }
   
}
</style>