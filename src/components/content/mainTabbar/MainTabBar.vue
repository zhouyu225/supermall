<template>
    <TabBar>
      <tab-bar-item path="/home" activecolor="red">
        <img slot="icon" src="~assets/img/Tabbar/home.svg">
        <img slot="icon-active" src="~assets/img/Tabbar/home_active.svg">
        <div slot="icon-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/categroy" >
        <img slot="icon" src="~assets/img/Tabbar/category.svg">
        <img slot="icon-active" src="~assets/img/Tabbar/category_active.svg">
        <div slot="icon-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activecolor="orange">
        <img slot="icon" src="~assets/img/Tabbar/shopcart.svg">
        <img slot="icon-active" src="~assets/img/Tabbar/shopcart_active.svg">
        <div slot="icon-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activecolor="lightgreen">
        <img slot="icon" src="~assets/img/Tabbar/profile.svg">
        <img slot="icon-active" src="~assets/img/Tabbar/profile_active.svg">
        <div slot="icon-text">我的</div>
      </tab-bar-item>
    </TabBar>
</template>

<script>
  import TabBar from "components/common/Tabbar/TabBar";
  import TabBarItem from "components/common/Tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>