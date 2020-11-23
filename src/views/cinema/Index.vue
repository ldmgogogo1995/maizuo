<template>
    <div class="cinema-list">
        <div class="cinema-list-main" v-if="cinemaList.length">
        <!-- 列表头部部分 -->
        <list-header :cinemaList = 'cinemaList'></list-header>
        <!-- 导航部分 -->
        <list-tag :cinemaList = 'cinemaList'></list-tag>
        <!-- 内容部分 -->
        <list-wrap :cinemaList = 'cinemaList'></list-wrap>
        </div>
    </div>
</template>

<script>
import ListHeader from '@/views/cinema/componets/ListHeader'
import ListTag from '@/views/cinema/componets/ListTag'
import ListWrap from '@/views/cinema/componets/ListWrap'
import {getCinemaListData} from '@/api/cinema'
export default {
    components:{
        ListHeader,
        ListTag,
        ListWrap
    },
    data(){
        return{
           cinemaList:[]

        }
    },
    created(){

        this.getCinema()
    },
    methods:{
        getCinema(){
            this.getCinemaList()
        },
        getCinemaList(){
            getCinemaListData().then(result=>{
                if(result.status === 0){
                    this.cinemaList = result.data.cinemas
                }
                console.log(this.cinemaList)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>