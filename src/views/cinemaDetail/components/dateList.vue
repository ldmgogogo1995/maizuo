<template>
  <div>
    <div class="date-list">
      <div class="tabs-bar-wrapper">
        <div class="tabs-bar">
          <ul class="tabs-nav">
            <li class="active" v-for="item in showDate" :key="item.a" style="padding: 0px 15px;">
              <span
                @click="$router.push({name:'scheduleList',params:{cinemaId,filmId,showDate:item}})"
              >{{item|getPremiereAt}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: {
    filmList: Array,
    showDate: Array,
    filmId: Number
  },
  data() {
    return {
      cinemaId: this.$route.params.cinemaId
    };
  },
  watch:{
    filmId:{
      handler(){
        console.log('filmid change',this.filmId)
         this.$router.push({name:'scheduleList',params:{cinemaId:this.cinemaId,filmId:this.$route.params.filmId,showDate:this.showDate[0]}})
         return; 
      },
      immediate:true
    }
  },
  created() {
    console.log('dateLIst--------------',this.filmId)
    // this.filmId = this.filmId * 1;
    // this.showDate = this.filmList.showDate;
   // this.getDate(this.showDate);
  },
  methods: {
    getDate(showDate) {
      this.$router.push({name:'scheduleList',params:{cinemaId:this.cinemaId,filmId:this.$route.params.filmId,showDate:1567785600}})
      return;
     // console.log(typeof this.filmId, "aiyawocao111");
    },
    setColor(){
        
    }
  }
};
</script>
<style lang="scss" scoped>
.date-list {
  width: 100%;
  .tabs-bar-wrapper {
    position: relative;
    z-index: 100;
    width: 100%;
    overflow-x: hidden;
    background: #fff;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    .tabs-bar {
      height: 49px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
      transition: -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
      -o-transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
      transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
      transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1),
        -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
      position: relative;
      .tabs-nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        width: 100%;
        li {
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          color: #191a1b;
          text-align: center;
          height: 16px;
          line-height: 16px;
          font-size: 14px;
          cursor: pointer;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          .active {
            color: #ff5f16;
          }
        }
      }
    }
  }
}
</style>