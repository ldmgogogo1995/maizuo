<template>

    <li class="film-list-item">
        <!-- 这是单独抽出来了的写法 -->
        <router-link :to='{name:"filmDetail",params:{id:item.filmId,filmType:type}}'>
          <div class="film-list-item-pic padding">
            <img :src="item.poster" />
          </div>
          <div class="film-list-item-desc">
            <h3 class="item-desc-name">
              <span class="name">{{item.name}}</span>
              <span class="is-3d">{{item.filmType.name}}</span>
            </h3>
            <p class="item-desc-grade info-col" v-if="type==1">
              <span>观众评分</span>
              <span class="grade">{{item.grade}}</span>
            </p>
            <p class="item-desc-actors info-col">
              <label>主演：</label>
              <span>{{item.actors | getActors}}</span>
            </p>
            <p class="item-desc-times info-col" v-if="type==1">
              <label>{{item.nation}}</label> |
              <span>{{item.runtime}}分钟</span>
            </p>
            <p class="item-desc-times info-col" v-else>
              <label>上映日期</label> :
              <span>{{item.premiereAt | getPremiereAt }}</span>
            </p>
          </div>
          <div class="film-list-item-action padding">
            <span href class="buy" v-if="type==1">购买</span>
            <span href class="buy" v-else-if="item.isPresale">预约</span>
          </div>
        </router-link>
      </li>
</template>
<script>
export default {
    props:{
        item:Object,
        type:{
            type:Number,
            default:1
        }
    }
}
</script>
<style  scoped>
.film-list-item{
    height: 1.88rem;
    padding:0.3rem 0;
    position: relative;
}
.film-list-item:after{
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
}
.film-list-item>a{
    display: flex;
    width:100%;
    align-items: center;
}
.film-list-item-pic{
    width:1.32rem;
    height: 1.88rem;
    flex:none;
    overflow:hidden;
}
.padding{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.film-list-item-pic>img{
    width: 100%;
}
.film-list-item-desc{
    flex:1;
    padding:0 .2rem;
    max-width: calc(100% - 2.32rem);
    box-sizing: border-box;
}
.item-desc-name{
    font-size:.32rem;
}
.item-desc-name .name{
    color: #191a1b;
    margin-right: 0.1rem;
}
.item-desc-name .is-3d{
    font-size: .18rem;
    color: #fff;
    background-color: #d2d6dc;
    height: .28rem;
    line-height: .28rem;
    padding: 0 2px;
    border-radius: 2px;
}
.film-list-item-desc .info-col{
    font-size:.26rem;
    color: #797d82;
    margin-top:.12rem;
    overflow-x: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}
.item-desc-grade .grade{
    color: #ffb232;
    font-size:.28rem;
}
.film-list-item-action{
    width:1rem;
    flex:none;
    height: 1.1rem;
    font-size:0;
}
.film-list-item-action .buy{
    display: block;
    box-sizing: border-box;
    line-height: .5rem;
    height: .5rem;
    width: 1rem;
    color: #ff5f16;
    font-size: .26rem;
    text-align: center;
    position: relative;
    border: 1px solid #ff5f16;
    border-radius: 2px;
}
</style>