<template>
  <div class='footer'>
    <!--首页底部-->
    <router-link to='/download'>
      <div class='footer-left'>
        <img src="../assets/log3.png" />
        <span>包罗万象</span>
      </div>
      <div class='footer-right'>
        <span>打开</span>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .footer{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 2;
    a{
      display: flex;
      padding: 10px 10px;
      box-sizing: border-box;
      justify-content: space-between;
      background-color: #fff;
      .footer-left{
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
      .footer-right{
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
