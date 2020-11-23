<template>
  <div class="film-poster">
    <img :src="filmInfo.poster" />
  </div>
</template>
<script>
export default {
    props:{
        filmInfo:Object
    }
}
</script>
<style scoped lang="scss">
.film-poster{
  position: relative;
  img{
    height: 4.2rem;
    width: 100%;
    // position: absolute;
    top: 50%;
    
  }
}
</style>