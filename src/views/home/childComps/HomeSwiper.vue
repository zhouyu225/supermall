<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="SwiperImageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array
      }
    },
    data(){
      return{
        isload:true
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      SwiperImageLoad(){
        if(this.isload){
          this.$emit("SwiperImageLoad")
          this.isload = false
        }
      }
    }
  }
</script>

<style scoped>

</style>