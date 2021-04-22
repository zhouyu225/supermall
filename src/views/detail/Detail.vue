<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" :shop="shop"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-info></detail-info>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import {getDetail} from "../../network/detail";
  import DetailSwiper from "./childComps/DetailSwiper";
  import {Goods,Shop} from "../../network/detail";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailInfo from "./childComps/DetailInfo";
  import Scroll from "../../components/common/scroll/Scroll";


  export default {
    name: "Detail",
    components: {
      DetailInfo,
      DetailShopInfo,
      DetailBaseInfo,
      DetailSwiper,
      DetailNavBar,
      Scroll
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{}
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        const data = res.result
        console.log(data);

        this.topImages = data.itemInfo.topImages

        this.goods = new Goods(data.itemInfo,data.columns,data.services)
        console.log(this.goods);

        this.shop = new Shop(data.shopInfo)
      })
    }
  }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 10;
    background-color: #ffffff;
    height: 100vh;
  }

  .detail-nav{
    position: relative;
    z-index: 11;
    background-color: #ffffff;
  }

  .content{
    height: calc(100% - 44px);
  }
</style>