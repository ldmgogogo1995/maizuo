<template>
  <div class="cinema-info">
    <div class="tags">
      <div class="tag" v-for=" item in cinema.services" :key="item.a">{{item.name}}</div>
    </div>
    <div class="address">
      <img class="cinema-address" src="@/assets/imgs/cinemaAddress.png" />
      <div class="address-des">{{cinema.address}}</div>
      <a href="#" class="tel-icon">
        <img class="tel-icon-img" src="@/assets/imgs/tel-icon.png" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cinema: Object
  }
};
</script>
<style lang="scss" scoped>
.tags {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 15px;
  color: #ffb232;
  overflow: hidden;
  position: relative;
  padding: 5px 0 15px;
  .tag {
    position: relative;
    padding: 0 6px;
    margin: 0 2.5px;
    font-size: 10px;
  }
  .tag::after {
    content: " ";
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    position: absolute;
    border: 1px solid #ffb232;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
    border-radius: 1px;
  }
}
.address {
  height: 50px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 17px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  .cinema-address {
    width: 14px;
    height: 21px;
  }
  .address-des {
    font-size: 14px;
    height: 20px;
    padding: 0 12px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .address-des::after{
    content: " ";
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    border-right: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transform: scaleX(.5);
    -ms-transform: scaleX(.5);
    transform: scaleX(.5);
  }
  .tel-icon{
    height: 18px;
    padding: 0 25px;
    float: left;
    img{
        width: 17px;
        height: 18px;
        position: relative;
        top: -24px;
    }
  }
}
</style>