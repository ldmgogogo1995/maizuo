<template>
  <div class="schedule-list">
    <div>
      <div class="schedule-item" v-for="item in scheduleList" :key="item.ldm">
        <div class="left">
          <div class="start-at">{{item.showAt|getPremiereAt('schedule')}}</div>
          <div class="end-at">{{item.endAt|getPremiereAt('schedule')}}散场</div>
        </div>
        <div class="middle">
          <div class="language">{{item.filmLanguage}}{{item.imagery}}</div>
          <div class="hall">{{item.hallName}}</div>
        </div>
        <div class="right">
          <div class="buy-ticket" v-if="item.isOnsell">购票</div>
          <div class="stop-sell" v-else>停售</div>
          <div class="lowest-price">
            <span class="preice-icon">￥</span>
            {{item.salePrice/100}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCinemaSchedule } from "@/api/cinema";
export default {
  data() {
    return {
      obj: {
        cinemaId: this.$route.params.cinemaId,
        filmId: this.$route.params.filmId,
        showDate: this.$route.params.showDate
      },
      scheduleList: []
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log(2288282288222)
        this.obj.cinemaId = newVal.params.cinemaId;
        this.obj.filmId = newVal.params.filmId;
        this.obj.showDate = newVal.params.showDate;
        this.getSchedule(this.obj);
      },
      deep: true,
      immediate: true
    }
  },
  created() {},
  methods: {
    getSchedule(obj) {
      // console.log(obj,'!!!!!!!!!!成!!!!')
      getCinemaSchedule(obj).then(result => {
        if (result.status === 0) {
          // console.log(result.data.schedules,'ccccccccccccccccccccccccccccccccccccccccccccccccccc')
          this.scheduleList = result.data.schedules;
          console.log(this.scheduleList, "冲冲冲冲冲111111111");
        }
      });
    }
  }
};
</script>
<style scoped lang='scss'>
.schedule-list {
  min-height: calc(100vh - 44px);
  .schedule-item {
    height: 74px;
    padding: 15px;
    position: relative;
    background: #fff;
    .left {
      float: left;
      width: 100px;
      .start-at {
        font-size: 15px;
        color: #191a1b;
      }
      .end-at {
        font-size: 13px;
        color: #797d82;
        margin-top: 2px;
      }
    }
    .middle {
      float: left;
      width: calc(100% - 240px);
      .language {
        font-size: 15px;
        color: #191a1b;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .hall {
        font-size: 13px;
        color: #797d82;
        margin-top: 2px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .right {
      float: right;
      padding: 10px 0;
      line-height: 25px;
      color: #ff5f16;
      .buy-ticket {
        font-size: 12px;
        float: right;
        height: 25px;
        width: 50px;
        border-radius: 2px;
        position: relative;
        text-align: center;
      }
      .buy-ticket::after {
        content: " ";
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        position: absolute;
        border: 1px solid #ff5f16;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border-radius: 4px;
      }
      .lowest-price {
        float: right;
        padding-right: 20px;
        font-size: 15px;
        span{
                font-size: 10px;
        }
      }
    }
  }
}
</style>