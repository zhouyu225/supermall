<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item"
         :class="{active:index === currentindex}" @click="tabclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array
    }
  },
  data(){
    return{
      currentindex:0
    }
  },
  methods:{
    tabclick(index){
      this.currentindex = index
      this.$emit("tabClick",index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size:15px;
    background-color: white;
  }

  .tab-control-item span{
    padding: 5px;
  }

  .tab-control-item{
    flex-grow: 1;
    height:40px;
    line-height: 40px;
  }

  .active span{
    color:var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>