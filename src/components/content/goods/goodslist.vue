<template>
  <div class="goodslist">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from "./goodslistitem"

  export default {
    name: "goodslist",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding: 5px 1px;
  }
</style>