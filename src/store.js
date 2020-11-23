import Vue from 'vue'
import Vuex from 'vuex'
import {getCityId,getCityName} from '@/utils/local-data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId:getCityId(),//城市ID
    cityName:getCityName()//城市名称
  },
  mutations: {
    setCityId(state,val){
      state.cityId = val
    },
    setCityName(state,val){
      state.cityName = val
    },

  },
  actions: {

  }
})
