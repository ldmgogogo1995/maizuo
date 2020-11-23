<template>
  <div class="film-photo">
    <div class="photos-title-bar">
      <span class="photos-title-text">剧照</span>
      <span class="photos-to-all">全部({{filmInfo.photos.length}})</span>
    </div>
    <div class="photo-list">
      <ul class="item-nav">
        <li class="item-wrap" v-for="item in filmInfo.photos" :key="item.a">
          <div class="img-wrap">
            <img :src="item" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    filmInfo: Object
  }
};
</script>
<style scoped lang='scss'>
.film-photo {
  margin-top: 0.2rem;
  margin-bottom: 1.2rem;
  background-color: #fff;
  .photos-title-bar {
    height: 1.24rem;
    width: 100%;
    // padding: 0.3rem;
    // display: flex;
    // justify-content: space-between;
    span {
      display: inline-block;
      height: 0.45rem;
      line-height: 0.44rem;
      // background: red;
    }
    .photos-title-text {
      font-size: 0.32rem;
      text-align: left;
      color: #191a1b;
      float: left;
    }
    .photos-to-all {
      font-size: 0.26rem;
      color: #797d82;
      float: right;
      margin-right: 0.6rem;
      cursor: pointer;
    }
  }
  .photo-list {
    height: 2.3rem;
    background: rgb(255, 255, 255);
    overflow-x: auto;
    overflow-y: hidden;
    .item-nav {
      width: 100%;
      height: 100%;
      display: flex;
    //   justify-content: flex-start;
    //   -webkit-box-align: center;
      align-items: center;
      position: relative;
      .item-wrap {
        height: 100%;
        min-width: 3rem;
        position: relative;
        margin-right: 0.2rem;
        width: auto !important;
        display: block;
        float: left;
        .img-wrap {
        display: flex;
        align-items:center;
          width: 3rem;
          height: 2rem;
          background: rgb(249, 249, 249);
          opacity: 1;
          position: absolute;
          overflow: hidden;
          top: 0;
          img{
            width: 100%;
            position: absolute;
            left: 0;   
          }
        }
      }
    }
  }
}
</style>