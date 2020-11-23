<template>
  <div class="film-list-content">
    <van-list v-model="loading" :finished="finished" @load="onLoad">
      <ul class="film-list-group">
        <film-list-item :type='1' v-for=" val in list " :key="val.ldm" :item='val' ></film-list-item>
      </ul>
    </van-list>
  </div>
</template>
<script>
import FilmListItem from "@/views/film/components/FilmListItem";
import { getFilmList } from "@/api/film";
export default {
  data() {
    return {
      list: [], //用于接收列表数据
      loading: false, //判断是否显示正在加载
      finished: false, //判断是否还有数据
      pageInfo: {
        pageNum: 0, //当前是第几页
        pageSize: 10 //每一页有多少条数据
      }
    }
  },
  components: {
    FilmListItem
  },
  methods:{
    onLoad(){
      this.pageInfo.pageNum++
      let query = {
        type:1,
        ...this.pageInfo
      }
      getFilmList(query).then(result=>{
        if(result.status === 0){
          this.loading = false;
          this.list = this.list.concat(result.data.films)
          if(this.list.length >= result.data.total){
            console.log('没有更多数据')
            this.finished = true
          }
          
        }
      })
    }
  }
};
</script>
<style scoped>
.film-list-content {
  /* margin-top:1.86rem; */
  background: #fff;
}
.film-list-group {
  padding: 0 0.3rem;
}
</style>