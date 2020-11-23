<template>
  <div cinemas-search>
    <div class="cinema-search-input">
      <div class="input-wrap">
        <input type="text" placeholder="请输入影院名称" class="search-input" v-model="txtVal" />
      </div>
      <div class="cancel-btn" @click="$router.go(-1)">取消</div>
    </div>
    <div class="cinema-search-result" v-if="hasSearch">
      <!-- 没有找到时显示以下内容 -->
      <div class="empty-result" v-show="isShow">
        <img src="@/assets/imgs/search.png" />
        <p>没有找到匹配的影院</p>
        <p class="empty-list-tip">提示：仅支持搜索“影院”，建议您检查输入的影院名称是否有误？</p>
      </div>
      <!-- 找到时显示以下内容 -->
      <div class="cinema-search-result-list" v-if = 'searchList.length'>
        <ul>
          <li class="cinema-search-result-item" v-for="item  in  searchList" :key='item.s'>
            <a href="#" class="cinema-item-wrap">
              <div class="cinema-info-lf">
                <span class="cinema-name">{{item.name}}</span>
                <span class="cinema-address">{{item.address}}</span>
              </div>
              <div class="cinema-info-rt">
                <div>
                  <span class="cinema-lowPrice price-fmt">
                    <i>￥</i>
                    <span class="interge">{{item.lowPrice/100}}</span>
                  </span>
                  <span class="upon">起</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getCinemaListData } from "@/api/cinema";
export default {
  data() {
    return {
      txtVal: "",
      cinemaList: [],
      isShow:false,
      hasSearch:false,
      searchList:[]
    };
  },
  created() {
    this.getCinema();
  },
  methods: {
    getCinema() {
      this.getCinemaList();
    },
    getCinemaList() {
      getCinemaListData().then(result => {
        if (result.status === 0) {
          this.cinemaList = result.data.cinemas;
        }
        console.log(this.cinemaList);
      });
    }
  },
  watch: {
    txtVal(newValue){
      if(!newValue){
        this.hasSearch = false
      }else{
        this.hasSearch = true
        for(var i in this.cinemaList){
          if(this.cinemaList[i].name.indexOf(newValue)!==-1||this.cinemaList[i].address.indexOf(newValue)!==-1){
            console.log(123)
            this.isShow=false
            this.searchList = this.cinemaList.filter(item=>item.name.indexOf(newValue)!==-1||item.address.indexOf(newValue)!==-1)
            return
          }else{
            console.log(234)
            this.isShow=true
          }
        }
        this.searchList=[]
      }
      
    }
  }
};
</script>
<style scoped lang='scss'>
.cinema-search-input {
  width: 90%;
  height: 0.98rem;
  padding: 0.19rem 0.3rem;
  position: fixed;
  .input-wrap {
    width: calc(100% - 43px);
    background-color: #f4f4f4;
    position: relative;
    top: -0.2rem;
    display: inline-block;
    border-radius: 3px;
    // width: 100%;
    height: 30px;
    .search-input {
      position: absolute;
      left: 0.67rem;
      top: 0;
      height: 0.6rem;
      width: calc(100% - 1.3rem);
      border: 0;
      background: #f4f4f4;
      font-size: 0.26rem;
      color: #2c3e50;
    }
  }
  .cancel-btn {
    width: 0.86rem;
    position: absolute;
    top: 0.25rem;
    display: inline-block;
    text-align: right;
    font-size: 0.28rem;
    line-height: 0.6rem;
  }
}
.cinema-search-result {
  z-index: 3004;
  position: absolute;
  top: 49px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  height: calc(100vh - 49px);
  width: 100vw;
  overflow-y: auto;
  .empty-result {
    position: absolute;
    top: 2.14rem;
    width: 100%;
    text-align: center;
    img {
      width: 1.8rem;
      margin: auto;
    }
    p {
      color: #bdc0c5;
      font-size: 0.28rem;
      margin: 0;
    }
    .empty-list-tip {
      font-size: 0.24rem;
      padding: 0 0.22rem;
    }
  }
  .cinema-search-result-list {
    ul {
      padding-left: 0.3rem;
    }
    li {
      // height: 0.9rem;
      position: relative;
      background-color: #fff;
      padding: 0.3rem;
      padding-left: 0;
      .cinema-item-wrap {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        .cinema-info-lf {
          width: calc(100% - 65px);
          text-align: left;
          .cinema-name {
            color: #191a1b;
            font-size: 0.3rem;
          }
          .cinema-address {
            display: block;
            color: #797d82;
            font-size: 0.24rem;
            margin-top: 0.1rem;
          }
        }
        .cinema-info-rt {
          width: 1.3rem;
          text-align: right;
          .price-fmt {
            font-size: 0.3rem;
            color: #ff5f16;
            height: 0 !important;
            display: inline-table !important;
            float: none !important;
            span {
              float: none !important;
            }
          }
          .upon {
            color: #ff5f16;
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>