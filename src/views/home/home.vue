<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="istabfixed"/>
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="Contentscroll" :pull-up-load="true" @pullingUp="loadmore">
      <home-swiper :banners="banners" @SwiperImageLoad="SwiperImageLoad"/>
      <home-recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </Scroll>
    <back-top @click.native="backClick" v-show="isshowbacktop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
  import FeatureView from "@/views/home/childComps/FeatureView";
  import GoodsList from "components/content/goods/goodslist";
  import BackTop from "components/content/backtop/BackTop";

  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/content/tabControl/TabControl";
  import Scroll from "@/components/common/scroll/Scroll"

  import {debounce} from "@/common/utils/debounce";

  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home"


  export default {
    name: "home",
    components:{
      TabControl,
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          "pop":{page:0,list:[]},
          "new":{page:0,list:[]},
          "sell":{page:0,list:[]},
        },
        titles: ["流行","新款","精选"],
        currentType:"pop",
        isshowbacktop:false,
        tabOffsetTop:0,
        istabfixed:false,
        saveY:0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      },
    },

    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY)
      this.$refs.scroll.refresh()
    },

    deactivated(){
      this.saveY = this.$refs.scroll.scroll.y
    },

    created() {
      this.getHomeMultidata()
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh)
      this.$bus.$on("imageLoad",() => {
        refresh()
      })
    },
    methods:{
      SwiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        console.log(this.tabOffsetTop);
      },
      loadmore(){
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.finishPullUp()
      },
      tabClick(index){
        switch (index){
          case 0:
            this.currentType = "pop"
            break
          case 1:
            this.currentType = "new"
            break
          case 2:
            this.currentType = "sell"
            break
        }
        this.$refs.tabControl1.currentindex = index;
        this.$refs.tabControl2.currentindex = index;
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      Contentscroll(position){
        this.isshowbacktop = -position.y > 2200

        this.istabfixed = -position.y > this.tabOffsetTop
      },

      getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    height:100vh;
    /*padding-top: 44px;*/
    position: relative;
  }

  .home-nav{
    background-color: var(--color-tint);
    color:#ffffff;

    /*position: fixed;*/
    /*left:0px;*/
    /*right:0px;*/
    /*top:0px;*/
    /*z-index: 2;*/
  }

  .content{
    position: absolute;
    top:44px;
    bottom: 49px;
    overflow: hidden;
  }

  .tab-control{
    position: relative;
    z-index: 3;
  }
</style>