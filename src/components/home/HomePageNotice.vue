<template>
	<div class='home-page-top-notice' ref='notice' v-if='showNotice'>
    <!--每次刷新页面，在顶部的提示-->
    <p>为您推荐了13篇文章</p>
	</div>
</template>

<script>
  
  export default{
    data(){
      return {
        list: [],
        showNotice: true
      }
    },
    mounted(){
      // 让提示2秒后消失
			setTimeout(() => {
        this.showNotice = false
      },2000)
    }
  }  
</script>

<style lang="scss" scoped>
	.home-page-top-notice{
    width: 100%;
    background-color: rgba(30,144,255,.3);
    p{
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      color: #2a90d7;
    }
  }
</style>
