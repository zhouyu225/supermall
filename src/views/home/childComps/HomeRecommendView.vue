<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommentView",
    props:{
      recommends:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .recommend{
    text-align: center;
    display: flex;
    padding: 10px 0 25px;
    border-bottom: 10px solid #eee;
    background-color: white;
  }

  .recommend-item{
    flex-grow: 1;
  }

  .recommend-item img{
    width:90%
  }
</style>