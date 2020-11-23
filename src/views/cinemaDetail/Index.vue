<template>
  <div class="cinema-schedule" v-if="cinemaDetail&&cinemaFilmList">
    <!-- 头部返回部分 -->
    <cinema-header :cinema='cinemaDetail'></cinema-header>
    <!-- 影院信息部分 -->
    <cinema-info :cinema='cinemaDetail'></cinema-info>
    <!-- 电影安排计划部分 -->
    <schedule-wrap :filmList='cinemaFilmList' v-if="cinemaFilmList.length"></schedule-wrap>
    
  </div>
</template>
<script>
import { getCinemaDetailData, getCinemaDetailList } from "@/api/cinema";
import CinemaHeader from "@/views/cinemaDetail/components/CinemaHeader";
import CinemaInfo from "@/views/cinemaDetail/components/CinemaInfo";
import ScheduleWrap from "@/views/cinemaDetail/components/ScheduleWrap";
export default {
  components: {
      CinemaHeader,
      CinemaInfo,
      ScheduleWrap
  },
  data() {
    return {
      cinemaId: this.$route.params.cinemaId,
      cinemaDetail: "",
      cinemaFilmList: []
    };
  },
  created() {
    this.getCinemaId();
  },
  methods: {
    getCinemaId() {
      // this.cinemaId = this.$route.params.cinemaId
      console.log(this.cinemaId);
      this.getCinemaDetail(this.cinemaId);
    },
    getCinemaDetail(cinemaId) {
      getCinemaDetailList(cinemaId).then(result => {
        if (result.status === 0) {
          // console.log('到这里了吗？')
          this.cinemaFilmList = result.data.films;
          console.log(this.cinemaFilmList);
        }
      });
      getCinemaDetailData(cinemaId).then(result => {
        if (result.status === 0) {
          // console.log('到这里了吗？')
          this.cinemaDetail = result.data.cinema;
          console.log(this.cinemaDetail);
        }
      });
    }
  }
};
</script>
<style scoped lang='scss'>
.cinema-schedule {
  overflow: hidden;
  padding-top: 0.88rem;
  background: #fff;
  min-height: 100vh;
}
</style>