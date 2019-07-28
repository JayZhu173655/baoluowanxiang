<template>
  <div class='download'>
    <!--下载App页面-->
    <div class='download-goback' @click='goback'>
      <img src='../assets/goback.png' />
      返回
    </div>
    <img src='../assets/download-bg.png' />
    <a href='script:void(0)'>点击下载app</a>
  </div>
</template>

<script>
  export default{
    methods: {
      goback(){
        // 返回上一层历史记录
        this.$router.go(-1)
      }
    }
  }  
</script>

<style lang="scss" scoped>
  .download{
    position: relative;
    height: 100vh;
    background-color: #f5f7f3;
    img{
      width: 100%;
      vertical-align: middle;
    }
    a{
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      line-height: 40px;
      text-align: center;
      border-radius: 8px;
      font-size: 18px;
      color: #fff;
      background-color: #56bfff;
    }
    .download-goback{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      color: #fff;
      background-color: #56bfff;
      img{
        width: 20px;
      }
    }
  }
</style>
