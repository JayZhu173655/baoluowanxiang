<template>
  <div class='download-app'>
    <!--这是进入下载页面的链接组件-->
    <router-link to='/download'>
      <div class='download-app-left'>
        <img src="../../assets/log3.png" />
        <span>包罗万象</span>
      </div>
      <div class='download-app-right'>
        <span>打开</span>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .download-app{
      width: 100%;
    a{
      display: flex;
      padding: 10px 10px;
      box-sizing: border-box;
      justify-content: space-between;
      background-color: #fff;
      .download-app-left{
        img{
          vertical-align: middle;
          width: 38px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        span{
          vertical-align: middle;
          font-size: 14px;
        }
      }
      .download-app-right{
        span{
          display: inline-block;
          padding: 4px 12px;
          margin-top: 10px;
          border-radius: 10px;
          font-size: 14px;
          color: #fff;
          background-color: #f85959;
        }
      }
    }  
  }
</style>
