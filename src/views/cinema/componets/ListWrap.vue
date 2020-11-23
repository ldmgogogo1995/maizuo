<template>
  <div class="cinema-list-wrap">
    <ul class="cinema-list">
      <li class="cinema-list-item" v-for="item in cinemaList" :key="item.a">
        <router-link :to='{name:"cinemaDetail",params:{cinemaId:item.cinemaId}}' class="cinema-item-wrap">
          <div class="cinema-info-lf cinema-info">
            <span class="cinema-name">{{item.name}}</span>
            <span class="address">{{item.address}}</span>
          </div>
          <div class="cinema-info-rt cinema-info">
            <div>
              <span class="cinema-lowPrice price-fmt">
                <i>￥</i>
                <span class="interge">{{item.lowPrice/100}}</span>
              </span>
              <span class="upon">起</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    cinemaList: Array
  },
  data(){
    return{
      // cinemaId:this.cinemaList.cinemaId
    }
  }
};
</script>
<style lang="scss" scoped>
.cinema-list-wrap {
    margin-top: 1.4rem;
  padding-bottom: 0.98rem;
  z-index: 100;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    position: relative;
    background-color: #fff;
    padding: 0.3rem;
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
        width: calc(100% - 1.3rem);
        text-align: left;
        padding-right: 0.3rem;
        float: left;
        span {
          display: block;
          max-width: 80%;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
          float: left;
        }
        .cinema-name {
          color: #191a1b;
          font-size: 0.3rem;
          float: left;
        }
        .address {
          color: #797d82;
          font-size: 0.24rem;
          margin-top: 0.01rem;
        }
      }
      .cinema-info-rt {
        width: 70px;
        text-align: center;
        float: right;
        margin-right: -5px;
        .price-fmt {
          font-size: 15px;
          color: #ff5f16;
          height: 0 !important;
          display: inline-table !important;
        }
        .upon {
          color: #ff5f16;
          font-size: 10px;
        }
      }
    }
  }
}
</style>