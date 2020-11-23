<template>
    <div class="tab-bar-wrap">
        <ul class="tab-bar-nav">
            <li>
                <router-link to='/films/nowPlaying' ref='nowPlaying'>正在热映</router-link>
            </li>
            <li>
                <router-link to='/films/comingSoon' ref='comingSoon'>即将上映</router-link>
            </li>
        </ul>
        <div class="tab-bar-line-wrap" :style="{transform:'translate3d('+tbPercent+'%, 0px, 0px)'}">
            <span class="tab-bar-line"></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tbPercent:0,
        }
    },
    watch:{
        '$route':{
            handler(val){
                // console.log(typeof(this.$refs.comingSoon))
                if(val.fullPath == '/films/comingSoon'||val.fullPath =='/films/ComingSoon'){
                    this.tbPercent=100
                    // this.changeColor(this.tbPercent)
                    
                }else if(val.fullPath == '/films/nowPlaying'){
                    this.tbPercent =0
                    // this.changeColor(this.tbPercent)
                }
            },
            deep:true,
            immediate:true
        }
    },
    methods:{
        // changeColor(){
            
            
        //     if(this.tbPercent==0){
        //         this.$refs.nowPlaying.$el.className = "active"
        //         this.$refs.comingSoon.$el.className = ''
        //     }else{
        //         this.$refs.nowPlaying.$el.className = ''
        //         this.$refs.comingSoon.$el.className = "active"
        //     }
            
        // }
    }
}
</script>
<style scoped>
    .tab-bar-wrap{
    height: .88rem;
    background: #fff;
    width: 100%;
    font-size:0.28rem;
    position: relative;
    z-index:199;
}
.tab-bar-wrap:after{
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
.tab-bar{
    position: fixed;
    top:.98rem;
}
.tab-bar-nav{
    display: flex;
    flex-direction: row;
    background-color: #fff;
}
.tab-bar-nav li{
    flex:1;
    text-align: center;
}
.tab-bar-nav a{
    display: block;
    line-height: 0.88rem;
    color: #191a1b;
}
.tab-bar-nav a.active{
    color: #ff5f16;
}
.tab-bar-line-wrap{
    position: absolute;
    bottom: 0;
    width: 50%;
    z-index: 200;
    left:0;
    transition: transform .2s;
}
.tab-bar-line{
    border-bottom: 2px solid #ff5f16;
    border-radius: 20px;
    display: block;
    margin: auto;
    width: 1.12rem;
}
</style>