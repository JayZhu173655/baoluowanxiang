<template>
  <div class='main-articles'>
    <!--文章列表-->
    <div v-for='(item,index) in articles' :key='index' class='articles-item'>
      <SummaryItemNoImg v-if='item.img.length === 0' :item='item'></SummaryItemNoImg>
      <SummaryItemImg v-if='item.img.length === 1' :item='item'></SummaryItemImg>
      <SummaryItemImgs v-if='item.img.length === 3' :item='item'></SummaryItemImgs>
    </div>
  </div>
</template>

<script>
  // 不带图片的摘要
  import SummaryItemNoImg from './common/SummaryItemNoImg.vue';
  // 带1张图片的摘要
  import SummaryItemImg from './common/SummaryItemImg.vue';
  // 带3张图片的摘要
  import SummaryItemImgs from './common/SummaryItemImgs.vue';
  export default{
    components: {
      SummaryItemNoImg,
      SummaryItemImg,
      SummaryItemImgs
    },
    props: ['articles']
  }  
</script>

<style lang="scss" scoped>
  .main-articles{
    padding: 90px 10px;
  }
</style>
