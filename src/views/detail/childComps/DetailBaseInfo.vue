<template>
  <div class="baseInfo">
    <div class="infotext">【{{shop.name}}】{{goods.title}}</div>
    <div class="price">
      <span class="realprice">￥{{goods.realPrice}}</span>
      <span class="oldprice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="sell">
      <div class="sellitem" v-for="item in goods.columns">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return{}
        }
      },
      shop:{
        type:Object,
        default() {
          return{}
        }
      }
    },
  }
</script>

<style scoped>
  .baseInfo{
    margin: 12px 8px 12px;
    padding: 0px 0px 6px 0px;
    box-shadow:0px 1.5px #d3d3d3;
  }

  .infotext{
    font-size:15px;
    font-weight:550;
    text-indent: 6px;
    line-height: 120%;
    color:#000000;
  }

  .price{
    margin:12px 0px;
  }

  .realprice{
    font-size:24px;
    color:hotpink;
  }

  .oldprice{
    margin: 0px 4px;
    color:darkgray;
    text-decoration-line: line-through;
  }

  .discount{
    background-color:deeppink;
    color:white;
    font-size:12px;
    border-radius: 10px;
    padding:4px 4px;
  }

  .sell{
    display: flex;
    color:gray;
    font-size: 14px;
    justify-content: space-between;
  }

</style>