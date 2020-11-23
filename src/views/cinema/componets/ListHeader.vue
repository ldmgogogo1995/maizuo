<template>
    <div class="header">
        <div class="left">
            <div class="city">
                <span @click="$router.push('/city')">{{$store.state.cityName}}</span>
                <img src="@/assets/imgs/down2.png">
            </div>
        </div>
        <div class="title">
            <div>影院</div>
        </div>
        <div class="right">
            <div>
                <router-link class="toCinemaSearch" to='/search'>
                    <img src="@/assets/imgs/fdj.png">
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        cinemaList:Array
    }
}
</script>
<style lang="scss" scoped>
    .header{
        z-index: 2000;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.88rem;
        line-height: 0.88rem;
        overflow: hidden;
        margin: 0;
        padding: 0;
        z-index: 3000;
        background-color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        div{
            float: left;
            height: 0.88rem;
        }
        .left{
            min-width: 15%;
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
            margin-left: 15px;
            .city{
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
                span{
                    display: inline-block;
                    font-size: 0.26rem;
                    max-width: 1.16rem;
                    height: 0.32rem;
                    line-height: 0.32rem;
                    overflow: hidden;
                    -o-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    padding-right: 0.1rem;
                    color: #191a1b;
                }
                img{
                    width:0.12rem;
                     height:0.06rem;
                    vertical-align: middle;
                }
            }
        }
        .title{
                text-align: center;
                font-size: 0.34rem;
                color: #191a1b;
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                div{
                    text-align: center;
                    width: 100%;
                    color: #191a1b;
                }
        }
        .right{
            width: 15%;
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
            margin-right: 0.3rem;
            div{
                width: 100%;
                text-align: right;
            }
            .toCinemaSearch{
                width: 100%;
                text-align: right;
                img{
                    vertical-align: middle;
                    width: 0.36rem;
                    height: 0.36rem;
                }
            }
        }
    }
</style>