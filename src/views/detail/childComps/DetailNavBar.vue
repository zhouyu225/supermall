<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles" class="title-item" :class="{active:index === currentindex}" @click="itemClick(index)">
        <span>
          {{item}}
        </span>
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        titles:["商品","参数","评论","推荐"],
        currentindex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentindex = index;
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
  }

  .title-item{
    flex-grow:1;
  }

  span{
    padding: 5px;
  }

  .active span{
    color:var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }

  .back img{
    vertical-align: middle;
  }
</style>