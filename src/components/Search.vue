<template>
  <div class='search'>
    <!--搜索页面，搜索功能未做-->
    <div class='search-title'>
      <img src='../assets/explore.png' />
    </div>
    <div class='search-box'>
      <a href='javascript:void(0)'>
        <span>搜你想搜的</span>
        <img src='../assets/search.png'/>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .search{
    margin-top: 40%;
    .search-title{
      text-align: center;
      img{
        vertical-align: middle;
      }
    }
    .search-box{
      padding: 20px 16px;
      cursor: pointer;
      a{
        display: flex;
        padding: 10px 10px;
        justify-content: space-between;
        align-items: center;
        border-radius: 6px;
        background-color: #f1f3f5;
        span{
          color: #9b9b9b;
        }
        img{
          width: 30px;
          height: 30px;
        }
      }
    }
  }
</style>
