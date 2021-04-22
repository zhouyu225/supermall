<template>
  <div class="wrapper">
    <ul>
      <button @click="btn">按钮</button>
      <li>name1</li>
      <li>name2</li>
      <li>name3</li>
      <li>name4</li>
      <li>name5</li>
      <li>name6</li>
      <li>name7</li>
      <li>name8</li>
      <li>name9</li>
      <li>name10</li>
      <li>name11</li>
      <li>name12</li>
      <li>name13</li>
      <li>name14</li>
      <li>name15</li>
      <li>name16</li>
      <li>name17</li>
      <li>name18</li>
      <li>name19</li>
      <li>name20</li>
      <li>name21</li>
      <li>name22</li>
      <li>name23</li>
      <li>name24</li>
      <li>name25</li>
      <li>name26</li>
      <li>name27</li>
      <li>name28</li>
      <li>name29</li>
      <li>name30</li>
      <li>name31</li>
      <li>name32</li>
      <li>name33</li>
      <li>name34</li>
      <li>name35</li>
      <li>name36</li>
      <li>name37</li>
      <li>name38</li>
      <li>name39</li>
      <li>name40</li>
      <li>name41</li>
      <li>name42</li>
      <li>name43</li>
      <li>name44</li>
      <li>name45</li>
      <li>name46</li>
      <li>name47</li>
      <li>name48</li>
      <li>name49</li>
      <li>name50</li>
      <li>name51</li>
      <li>name52</li>
      <li>name53</li>
      <li>name54</li>
      <li>name55</li>
      <li>name56</li>
      <li>name57</li>
      <li>name58</li>
      <li>name59</li>
      <li>name60</li>
      <li>name61</li>
      <li>name62</li>
      <li>name63</li>
      <li>name64</li>
      <li>name65</li>
      <li>name66</li>
      <li>name67</li>
      <li>name68</li>
      <li>name69</li>
      <li>name70</li>
      <li>name71</li>
      <li>name72</li>
      <li>name73</li>
      <li>name74</li>
      <li>name75</li>
      <li>name76</li>
      <li>name77</li>
      <li>name78</li>
      <li>name79</li>
      <li>name80</li>
      <li>name81</li>
      <li>name82</li>
      <li>name83</li>
      <li>name84</li>
      <li>name85</li>
      <li>name86</li>
      <li>name87</li>
      <li>name88</li>
      <li>name89</li>
      <li>name90</li>
      <li>name91</li>
      <li>name92</li>
      <li>name93</li>
      <li>name94</li>
      <li>name95</li>
      <li>name96</li>
      <li>name97</li>
      <li>name98</li>
      <li>name99</li>
      <li>name100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll"

  export default {
    name: "categroy",
    data(){
      return{
        scroll:null
      }
    },
    methods:{
      btn(){
        console.log("1111");
      }
    },
    mounted() {
      this.scroll = new BScroll(".wrapper",{
        probeType:3,
      })

      this.scroll.on("scroll",(position) => {
        console.log(position);
      })
    }
  }
</script>

<style scoped>
  .wrapper{
    height:150px;
    background-color: skyblue;
    overflow: hidden;
  }
</style>