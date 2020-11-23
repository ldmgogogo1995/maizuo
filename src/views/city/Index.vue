<template>
    <div>
        <header>
            <h2>当前城市----{{$store.state.cityName}}</h2>
        </header>
        <dm-location v-show="false" @changeCity='selectCity'></dm-location>
        <div>
            热门城市
        </div>
        <dm-index-bar @changeCity='selectCityTwo' v-if="cityList.length" :dataList='cityData' :indexes='indexes'></dm-index-bar>
    </div>
</template>
<script>
import DmLocation from '@/components/Location'
import DmIndexBar from './IndexBar'
import getCityList from '@/api/city'
import{ setCityId,setCityName } from '@/utils/local-data'
import { mapMutations } from 'vuex'
export default {
    components:{
        DmLocation,
        DmIndexBar
    },
    data(){
        return{
            cityList:[],
            gpsCityName:'',//定位城市名称
             gpsCityId:null,//定位城市的id
             indexes:[],//存储所的是所有城市拼音的首字母
        }
    },
    computed:{
        cityData(){
            //(a:[{}],b[{}])
            let result = {} //存储所有城市，是按城市的拼音首字母进行分类
            let _cityList = [...this.cityList]
            let _indexes = [...this.indexes]
            _cityList.forEach(item=>{
                let key = item.pinyin.charAt(0).toUpperCase()
                if(!result[key]){
                    result[key] = []
                    _indexes.push(key)
                }
                result[key].push(item)
            })
            _indexes.sort()
            // console.log(this.indexes)
            return result
        }
    },
    created(){
        this.getCityData()
    },
    methods:{
        ...mapMutations(['setCityId','setCityName']),
        selectCity(name){
            //根据当前城市名称获取相应的城市ID
            //将城市ID以及城市名称存放在localStorage中合vuex中
            console.log('子传父',name)
            this.gpsCityName = name
            this.getCityIdByName()
            this.setCity(this.gpsCityId,this.gpsCityName)
        },
        getCityData(){
            getCityList().then(result=>{
                if(result.status == 0){
                    this.cityList = result.data.cities
                    // console.log(this.cityList)
                }
            })
        },
        getCityIdByName(){
            for(let i=0;i<this.cityList.length;i++){
                if(this.cityList[i].name == this.gpsCityName){
                    this.gpsCityId = this.cityList[i].cityId
                    break;
                }
            }
            // console.log(this.gpsCityId,this.gpsCityName)
        },
        //存储当前的城市名以及ID
        setCity(id,name){
            setCityId(id)
            setCityName(name)
            this.setCityId(id)
            this.setCityName(name)
        },
        selectCityTwo(id,name){
            this.setCity(id,name)
            this.$router.push('/films')
        }
    }
}
</script>