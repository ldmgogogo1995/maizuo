<template>
    <div class="film-list">
        <film-banner></film-banner>
        <van-sticky @scroll='onScroll' >
        <film-header v-show='isShow'></film-header>
        <film-tab-nav></film-tab-nav>
        </van-sticky>
        <router-view></router-view>
    </div>
</template>
<script>
import FilmHeader from './components/Header'
import FilmBanner from './components/Banner'
import FilmTabNav from './components/TabNav'

export default {
    components:{
        FilmHeader,
        FilmBanner,
        FilmTabNav,
        
    },
    data(){
        return{
            isShow:false
        }
    },
    methods:{
        onScroll(val){
            console.log(val)
            this.isShow = val.isFixed
        }
    }
}
</script>
<style scoped>

</style>