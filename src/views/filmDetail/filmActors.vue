<template>
    <div class="film-actors">
        <div class="actors-title-bar">
            <span class="actors-title-text">演职人员</span>
        </div>
        <div class="row-scroll-wrapper actors-list">
            <ul class="row-scroll-items-nav" >
                <li class="row-scroll-item" v-for="item in filmInfo.actors" :key='item.a'>
                    <div class="actors-item" >
                        <img :src="item.avatarAddress">
                    </div>
                    <span class="actors-name">{{item.name}}</span>
                    <span class="actors-role">{{item.role}}</span>
                </li>
            </ul>
        </div>
        <!-- {{filmInfo.actors}} -->
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
    .film-actors{
        margin-top: 0.2rem;
        background-color: #fff;
        .actors-title-bar{
            padding: 0.3rem;
            // height: 0.9rem;
            .actors-title-text{
                    font-size: 0.32rem;
                    text-align: left;
                    color: #191a1b;
                    display: inline-block;
                    height: 0.45rem;
                    line-height: 0.44rem;
                    
            }
        }
        .actors-list{
            height: 2.8rem;
            overflow-x: auto;
            overflow-y: hidden;
            ul{ 
                width: 100%;
                
                display: flex;
                // justify-content: space-between;
                img{
                    width:1.7rem;
                    height:1.7rem;
                }
                li{
                    width: 1.7rem;
                    padding: 0.1rem;
                    span{
                        text-align: center;
                        display: block;
                    }
                    .actors-name{
                        padding-top: 0.2rem;
                        font-size: 0.24rem;
                        color: #191a1b;
                        width: 1.7rem;
                        height: 0.36rem;
                        display: block;
                        overflow: hidden;
                        -o-text-overflow: ellipsis;
                        text-overflow: ellipsis;
                        white-space: nowrap;                       
                    }
                    .actors-role{
                        font-size: 0.2rem;
                        color: #797d82;
                    }

                }
            }
            
        }
    }
</style>