<template>
<div class="film-list-content">
  <van-list v-model="loading" :finished="finished" @load="onLoad">
    <ul class="film-list-group">
      <!-- 一个列表项start -->
      <!-- <li class="film-list-item">
        <a href>
          <div class="film-list-item-pic padding">
            <img src="@/assets/imgs/nr2.jpg" />
          </div>
          <div class="film-list-item-desc">
            <h3 class="item-desc-name">
              <span class="name">速度与激情：特别行动</span>
              <span class="is-3d">3D</span>
            </h3>
            <p class="item-desc-grade info-col">
              <span>观众评分</span>
              <span class="grade">7.6</span>
            </p>
            <p class="item-desc-actors info-col">
              <label>主演：</label>
              <span>大卫·雷奇 道恩·强森 杰森·斯坦森 伊德瑞斯·艾尔巴</span>
            </p>
            <p class="item-desc-times info-col">
              <label>美国 英国</label> |
              <span>133分钟</span>
            </p>
          </div>
          <div class="film-list-item-action padding">
            <span href class="buy">购买</span>
          </div>
        </a>
      </li> -->
      <!-- 通过父组件传递数据到共同的子组件，然后通过子组件来遍历并且渲染数据 -->
      <film-list-item v-for="val in list" :type='2' :key=val.id :item='val'></film-list-item>
       <!-- v-for="val in list" :type='2' :key=val.id :item='val' -->
    </ul>
    </van-list>
  </div>
</template>
<script>
import FilmListItem from '@/views/film/components/FilmListItem'
import {getFilmList} from '@/api/film'
export default {
  data(){
    return{
      list:[],//存放获取将要渲染的数据
      loading:false,//判断是否显示正在加载
      finished:false,//判断是否还有数据
      pageInfo:{
        pageNum:0,//当前是第几页
        pageSize:10//每一页有多少条数据
      }
    }
  },
  components:{
    FilmListItem
  },
  methods:{
    onLoad(){
      this.pageInfo.pageNum++;
      // console.log('正在请求数',this.pageInfo.pageNum)
      //传递一个query过去
      let query = {
        type:2,
        ...this.pageInfo
      }
      getFilmList(query).then(result=>{
        if(result.status ===0){
          this.loading = false;
          //请求不同页面请求的数据与之前的数据连接起来
          
          this.list = this.list.concat(result.data.films);
          if(this.list.length >= result.data.total){
            console.log('没有更多数据')
            this.finished = true
          }
        }
      })
    }
  }
  
}
</script>
<style scoped>
.film-list-content{
    /* margin-top:1.86rem; */
    background: #fff;
}
.film-list-group{
    padding:0 0.3rem;
}

</style>