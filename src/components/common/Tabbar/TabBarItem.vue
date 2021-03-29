<template>
  <div class="tabbaritem" @click="itemClick">
    <div v-if="!isactive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="icon-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return{
        // active:true,
      }
    },
    props:{
      path:String,
      activecolor:{
        type:String,
        default:"pink"
      }
    },
    computed:{
      isactive(){
        return this.$route.path == this.path
      },
      activeStyle(){
        return this.isactive? {color:this.activecolor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tabbaritem{
    flex-grow:1;
    text-align: center;
    height:49px;
    font-size:14px;
  }

  .tabbaritem img{
    height:24px;
    width:24px;
    margin-top:3px;
    vertical-align: middle;
  }
</style>