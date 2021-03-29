<template>
  <div id="home">
    <nar-bar class="home-nav"/>
    <home-swiper  :banners="banners"/>
    <home-recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NarBar from "@/components/common/navbar/NarBar"
  import HomeSwiper from "./childComps/HomeSwiper"
  import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";

  import {getHomeMultidata} from "network/home"

  export default {
    name: "home",
    components:{
      NarBar,
      HomeSwiper,
      HomeRecommendView
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color:#ffffff;
  }
</style>