<template>
  <div class="film-base-desc">
    <div class="col">
      <div class="film-name">
        <span class="name">{{filmInfo.name}}</span>
        <span class="item">{{filmInfo.filmType.name}}</span>
      </div>
      <span class="film-grade" v-if="type==1">
        <i class="grade">{{filmInfo.grade}}</i>
        <span class="grade-text">分</span>
      </span>
    </div>
    <div class="film-category grey-text">{{filmInfo.category}}</div>
    <div class="film-premiere-time grey-text">{{filmInfo.premiereAt | getPremiereAt('ymd')}} 上映</div>
    <div class="film-nation-runtime grey-text">{{filmInfo.nation}}  |  {{filmInfo.runtime}}</div>
    <div class="film-base-synopsis grey-text hide">{{filmInfo.synopsis}}</div>
    <div class="toggle"><img src='@/assets/imgs/down-arrow.png' class="upper"></div>
  </div>
</template>
<script>
export default {
  props: {
    filmInfo: Object,
    type: Number
  }
};
</script>
<style scoped lang='scss'>
.film-base-desc {
  padding: 0.3rem;
  padding-top: 0.24rem;
  background-color: #fff;
  .col {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .film-name {
      width: 5.12rem;
      .name {
        color: #191a1b;
        font-size: 0.36rem;
        height: 0.48rem;
        line-height: 0.48rem;
        margin-right: 0.14rem;
        vertical-align: middle;
      }
      .item {
        font-size: 0.18rem;
        color: #fff;
        background-color: #d2d6dc;
        height: 0.28rem;
        line-height: 0.28rem;
        padding: 0 0.04rem;
        border-radius: 0.04rem;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .film-grade {
      width: calc(100% - 250px);
      text-align: right;
      color: #ffb232;
      .grade{
            font-size: 18px;
            font-style: italic;
      }
      .grade-text{
        font-size: 10px;
      }
    }
  }
  .grey-text{
    font-size: 0.26rem;
    color: #797d82;
    margin-top:0.08rem; 
  }
  .film-base-synopsis{
        transition: height .5s ease;
  }
  .toggle{
    text-align: center;
    display: block;
    // height: 0.32rem;
    width: 0.4rem;
    margin: auto;
    line-height: normal;
    .upper{
    transform: rotate(180deg);
    }
    img{
      width: 0.16rem;
     margin: auto; 
    }
  }
}
</style>