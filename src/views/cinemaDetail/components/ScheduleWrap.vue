<template>
  <div class="schedule-wrap">
    <div class="film-bg">
      <div class="img" :style="{backgroundImage: `url(${bgUrl})`}"></div>
    </div>
    <div class="film-list">
      <!-- Swiper -->
      <div class="swiper-container swiper-container-wp8-horizontal">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in filmList" :key="item.a" ref="swiperWrapper">
            <!-- :class="classNameee" -->
            <div class="film-item">
              <div class="img-wrap">
                <img :src="item.poster" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="triangle">
        <img src="@/assets/imgs/jianjian.png" />
      </div>
    </div>
    <div class="film-info">
      <div class="film-head">
        <span class="film-name">{{filmName}}</span>
        <span class="film-score">{{filmScore}}</span>
        <span class="film-score-unit">分</span>
      </div>
      <div class="film-desc">{{filmDesc}}</div>
      <img src="@/assets/imgs/goleft.png" />
    </div>
    <!-- <div class="date-list"></div> -->
    <router-view :filmList='filmList' :showDate='showDate' :filmId='filmId'></router-view>
  </div>
</template>
<script src="../dist/js/swiper.min.js"></script>
<script>
import Swiper from "swiper";
export default {
  props: {
    filmList: Array
  },
  data() {
    return {
      bgUrl: "",
      filmName:'',
      filmScore:'',
      filmDesc:'',
      filmId:0,
      showDate:[]
    };
  },
  watch: {
    //   'filmId':{
    //       handler(newVal){
    //           this.$route.params['filmId']=newVal
    //           console.log(this.$route.params,this.$route.path)
    //       },
    //     //   deep:true,
    //     // immediate:true
    //   }
  },
  computed: {},
  mounted() {
    this.Siwper();
  },
  updated() {},
  created() {},
  methods: {
    Siwper() {
      let filmList = this.filmList;
      let that = this;
      var swiper = new Swiper(".swiper-container-wp8-horizontal", {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        slideToClickedSlide:true,
        // loop: true,
        pagination: {
          clickable: true
        },
        on: {
          transitionEnd() {
            that.showDate = filmList[this.activeIndex].showDate
            that.bgUrl = filmList[this.activeIndex].poster;
            that.filmName = filmList[this.activeIndex].name;
            that.filmScore = filmList[this.activeIndex].grade;
            that.filmId = filmList[this.activeIndex].filmId*1;
            that.filmDesc = 
            `${filmList[this.activeIndex].category}
            |${filmList[this.activeIndex].runtime}分钟
            |${filmList[this.activeIndex].director}
            |${filmList[this.activeIndex].actors.map(item=>item.name)}`;
            console.log(8888888888888888888)
           that.$router.push({name:'dateList',params:{cinemaId:that.$route.params.cinemaId,filmId:that.filmId}})
            
            
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("~@/assets/css/swiper-filmbg.min.css");
.schedule-wrap {
  position: relative;
  .film-bg {
    position: absolute;
    top: 0;
    height: 160px;
    width: 100%;
    padding: 15px 0;
    overflow: hidden;
    .img {
      height: 100%;
      width: 100%;
      filter: blur(30px);
      -webkit-filter: blur(30px);
    }
  }
  .film-list {
    height: 3.2rem;
    padding: 0.3rem 0;
    position: relative;
    .swiper-slide .film-item {
      height: 100%;
      .img-wrap {
        height: 100%;
      }
    }
    .triangle {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      top: 0.7rem;
      img {
        width: 0.4rem;
        height: 0.2rem;
      }
    }
  }
  .film-info {
    width: 100%;
    background: #fff;
    height: 1.6rem;
    padding: 0.3rem 0;
    position: relative;
    .film-head {
      margin-bottom: 10px;
      text-align: center;
      line-height: 18px;
      .film-name {
        font-size: 0.3rem;
        color: #191a1b;
        padding-right: 0.1rem;
      }
      .film-score {
        font-size: 16px;
        font-style: italic;
        color: #ffb232;
      }
      .film-score-unit {
        font-size: 10px;
        color: #ffb232;
      }
    }
    .film-desc {
      text-align: center;
      height: 0.36rem;
      color: #797d82;
      font-size: 13px;
      padding: 0 12%;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    img {
      position: absolute;
      right: 0.3rem;
      top: 0;
      margin-top: 0.72rem;
      width: 0.08rem;
      height: 0.16rem;
    }
  }
  .date-list {
    width: 100%;
  }
  .schedule-list {
    min-height: calc(100vh - 44px);
  }
}
// Siwper css设置处
.swiper-container {
  width: 100%;
}
.swiper-slide {
  width: 1.635rem;
  height: 2.6rem;
  transition: 300ms;
  transform: scale(0.8);

  img {
    width: 100%;
    height: 100%;
  }
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
</style>