import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filter/Index'  //导入全局过滤器
import { Swipe, SwipeItem, List, Sticky,IndexBar,IndexAnchor,Cell } from 'vant';
//声明全局过滤器
for (var i in filters){
  // console.log(i,filters,filters[i])
  Vue.filter(i,filters[i])//通过循环遍历的方式，创建全局过滤器， ('过滤器名字'，方法(方法可以传参数，需要过滤的东西))
}
import '@/assets/css/reset1.css'
Vue.use(Swipe).use(SwipeItem).use(List).use(Sticky).use(IndexBar).use(IndexAnchor).use(Cell);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
