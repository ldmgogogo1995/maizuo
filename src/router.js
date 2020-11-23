import Vue from 'vue'
import Router from 'vue-router'
import FilmIndex from '@/views/film/Index'
import NowPlaying from '@/views/film/NowPlaying' 
import ComingSoon from '@/views/film/ComingSoon'
import CinemaIndex from '@/views/cinema/Index'
import CenterIndex from '@/views/center/Index'
import Detail from '@/views/film/Detail'
import CinemaList from '@/views/cinema/CinemaList'
import Search from '@/views/cinema/Search'
import CityIndex from '@/views/city/Index'
import store from './store'
import cinemaIndex from '@/views/cinemaDetail/Index'
import dateList from '@/views/cinemaDetail/components/dateList'
import scheduleList from '@/views/cinemaDetail/components/scheduleList'
Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),

  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
    path:'/',
    redirect:'/films'
  },{
    path:'/films',
    component: FilmIndex,
    children:[{
      path:'',
      redirect:'/films/nowPlaying'
    },{
      path:'nowPlaying',
      component: NowPlaying,
      meta:{
        hasFooter:true
      }
    },{
      path:'comingSoon',
      component: ComingSoon,
      meta:{
        hasFooter:true
      }
    }]
  },{
    // 影院首页路由
    path:'/cinemas',
    component: CinemaIndex,
    meta:{
      hasFooter:true
    },

  },{
    // 个人中心路由
    path:'/center',
    component: CenterIndex,
    meta:{
      hasFooter:true
    }
  },{
    // 电影详情路由
    path:'/films/:id/:filmType',
    component:Detail,
    name:'filmDetail'
  },{
    // 影院列表路由（通过选座进入）
    path:'/cinemas/:id/:cityId',
    component: CinemaList,
    name:'cinemaList',
  },{
    // 搜索路由
    path:'/search',
    component:Search
  },{
    //城市定位路由
    path:'/city',
    component:CityIndex
  },{
    //电影院详情
    path:'/cinema/:cinemaId',
    component:cinemaIndex,
    name:'cinemaDetail',
    children:[{
      path:'film/:filmId',
      component:dateList,
      name:"dateList",
      children:[{
        path:':showDate',
        component:scheduleList,
        name:'scheduleList'
      }]
    }]
  }]
})
let whiteList = ['/center','/city']

router.beforeEach((to,from,next)=>{
  console.log(to.path)
  //检测是否已经定位到当前
  if(whiteList.indexOf(to.path) === -1 && !store.state.cityId){
    next('/city')
    return
  }
  next()
})
export default router