<template>
    <div class="film-detail">
        <div class="film-main" v-if="filmInfo">
            <!-- 电影详情头部 -->
            <header-title :filmInfo='filmInfo'></header-title>
            <!-- 电影详情的大图部分 -->
            <film-poster :filmInfo='filmInfo'></film-poster>
            <!-- 电影基本说明部分 -->
            <film-base-desc :filmInfo='filmInfo' :type='type'></film-base-desc>
            <!-- 电影演员的信息部分 -->
            <film-actors :filmInfo='filmInfo' v-if="filmInfo.actors"></film-actors>
            <!-- 电影剧照部分 -->
            <film-photo-desc :filmInfo='filmInfo'></film-photo-desc>
            <!-- 选座按钮部分 -->
            <film-nav-bar :filmInfo='filmInfo' :id="id"></film-nav-bar>
        </div>
        
    </div>
    
</template>
<script>
import {getDetailInfo} from '@/api/film'
import headerTitle from '@/views/filmDetail/headerTitle'
import filmNavBar from '@/views/filmDetail/filmNavBar'
import filmActors from '@/views/filmDetail/filmActors'
import filmBaseDesc from '@/views/filmDetail/filmBaseDesc'
import filmPhotoDesc from '@/views/filmDetail/filmPhotoDesc'
import filmPoster from '@/views/filmDetail/filmPoster'

export default {
    components:{
        headerTitle,
        filmActors,
        filmBaseDesc,
        filmNavBar,
        filmPoster,
        filmPhotoDesc
    },
    data(){
        return{
            id:null,
            filmInfo:null,
            type:null
        }
    },
   created(){
       this.getDetailId()
   },
   watch:{
//        $route:{
//            handler(val){
//                this.getDetail(val.params.id)
//            },
//            immediate:true,
//            deep:true
//        }
   },
    methods:{
        getDetailId(){
            this.type=this.$route.params.filmType*1
            this.id=this.$route.params.id*1
            this.getDetail(this.id)
        },
        getDetail(id){
            getDetailInfo(id).then(result=>{
                
                if(result.status == 0 ){
                    this.filmInfo = result.data.film
                }
                console.log(this.filmInfo)
            })
    
         }
    },
    
}
</script>
<style lang="scss" scoped>
.film-detail{
    -webkit-tap-highlight-color: rgba(0,0,0,0)
 
}
</style>