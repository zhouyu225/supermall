<template>
  <div class="detailshopinfo">
    <div class="services">
      <div class="servicesitem" v-for="item in shop.services">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="shop">
      <div class="logo">
        <img :src="shop.logo" alt="">
        <span class="shopname">{{shop.name}}</span>
      </div>
    </div>
    <div class="shopinfo">
      <div class="leftinfo1">
        <div>{{shop.sells}}</div>
        <div>总售量</div>
      </div>
      <div class="leftinfo2">
        <div>{{shop.goodsCount}}</div>
        <div>全部宝贝</div>
      </div>
      <div class="rightinfo">
        <div class="rightitem" v-for="item in shop.score">
          {{item.name + ":" + item.score}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        Type:Object,
        default(){}
      }
    }
  }
</script>

<style scoped>
  .detailshopinfo{
    margin: 20px 8px 0px;
  }

  .services{
    display: flex;
    padding: 0px 0px 20px 0px;
    justify-content: space-between;
    box-shadow:0px 1.5px #d3d3d3;
  }

  .servicesitem{
    flex-gorw:1;
    font-size:12px;
    color:black;
  }

  .servicesitem img{
    width:12px;
    height:12px
  }

  .shop{
    display: flex;
    margin:20px 12px;
    position: relative;
  }

  .logo img{
    width: 50px;
    height:50px;
    border-radius: 50%;
    border:1.5px solid #d3d3d3;
  }

  .shopname{
    position: absolute;
    left:60px;
    top:30%;
  }

  .shopinfo{
    display: flex;
    align-items: center;
    text-align: center;
  }

  .leftinfo1{
    flex:0.4;
  }

  .leftinfo2{
    flex:0.4;
  }

  .rightinfo{
    flex:1;
    text-align: start;
  }

  .rightitem{
    padding-left: 36px;
  }
</style>