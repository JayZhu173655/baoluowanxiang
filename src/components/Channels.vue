<template>
	<div class='channels'>
    <!--资讯增加删除页面-->
		<div class='channels-top'>
      <img @click='goBack' src='../assets/goback.png'/>
      <router-link to='/channels'>资讯管理</router-link>
    </div>
    <div class='channels-content'>
      <div class='channels-content-show channels-content-container'>
        <p>点击删除暂时不需要的资讯<p>
        <div class='channels-content-items'>
          <span 
            v-for='item in showItems' 
            :key='item.id'
            @click='reduce(item.id)'
          >
            {{item.name}}
          </span>
        </div>
      </div>
      <div class='channels-content-hide channels-content-container'>
        <p ref='notice'>点击增加需要的资讯<p>
        <div class='channels-content-items'>
          <span 
            v-for='item in hideItems' 
            :key='item.id'
            @click='add(item.id)'
          >
            {{item.name}}
          </span>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  // 把每个资讯的内容用vuex来管理
  // 当添加资讯的项目数为四时，点击就不能再添加了，会提示只能添加16个
  // 点击删除中‘推荐’是不能删除的
  export default{
    data(){
      return {
        showItems: [],
        hideItems: [],
      }
    },
    methods: {
      add(id){
        // 点击‘点击增加需要的资讯’中的项目，添加到‘点击删除暂时不需要的资讯’中去
        // 当‘点击删除暂时不需要的资讯’等于16个时，再点击其中项目不会删除，
        // ‘点击增加需要的资讯’会变成红色的‘最多16个资讯，请先删除一些’
        // 可以发送dispatch或者commit来修改store中的数据
        //this.$store.dispatch('addFun');
        const len = this.showItems.length;
        if(len === 16){
          if(this.$refs.notice.innerText !== '最多16个资讯，请先删除一些'){
            this.$refs.notice.classList.add('change-red');
            this.$refs.notice.innerText = '最多16个资讯，请先删除一些';
          }
        }
        if(len < 16){
          this.$store.commit('add',id);
        }
      },
      reduce(id){
        // 点击‘点击删除暂时不需要的资讯’中的项目，删除点击的项目，‘推荐’项目点击无效果
        // 并判断其中项目是否等于16个，少于时，‘点击增加需要的资讯’变成正常
        //this.$store.dispatch('reduceFun');
        const len = this.showItems.length;
        if(len === 16){
          if(this.$refs.notice.innerText !== '点击增加需要的资讯'){
            this.$refs.notice.classList.remove('change-red');
            this.$refs.notice.innerText = '点击增加需要的资讯';
          }
        }
        if(id > 1){
          this.$store.commit('reduce',id);
        }
      },
      goBack(){
        // 如果用hash路由模式不会出现下面情况
        // 如果非hash路由模式下出现返回数据无法更新，请百度使用下面方法实现刷新页面
        // 这里使用go()方法会导致返回去后，页面有的信息无法更新，还是老数据
        // 这里可以直接跳转到指定路径，当然有多层路径的不适合
        // 或者监听路由的变化，重新加载页面可以解决多个页面的返回
        // 这里我们在HomePageNavbar组件中监听list的变化来编程式导航
        this.$router.go(-1)
      }
    },
    created(){
      // 判断localStorage中是否存在channels
      // 存在就提取出来，并改变store中的channels数据
      // 不存在就使用store中的channels数据,并存到本地localStorage中
      if(localStorage.getItem('channels')){
        let channels = JSON.parse(localStorage.getItem('channels'))
        this.$store.commit('checkChannels', channels);
        this.showItems = this.$store.state.channels.showChannels;
        this.hideItems = this.$store.state.channels.hideChannels;
      } else{
        this.showItems = this.$store.state.channels.showChannels;
        this.hideItems = this.$store.state.channels.hideChannels;
        localStorage.setItem('channels',JSON.stringify(this.$store.state.channels));
      }
      
    }
  }  
</script>

<style lang="scss" scoped>
  /*
    /deep/可以解决动态添加元素的样式不生效的问题
  */
	.channels{
    .channels-top{
      display: flex;
      width: 100%;
      height: 50px;
      justify-content: flex-start;
      align-items: center;
      background-color: #d43d3d;
      img{
        width: 22px;
        height: 25px;
        margin-left: 10px;
      }
      a{
        margin-left: 32%;
        font-size: 18px;
        color: #fff;
      }
    }
    .channels-content{
      .channels-content-container{
        padding: 0 10px;
        &.channels-content-show{
          .channels-content-items{
            span{
              &:nth-child(1){
                background-color: #f0f0f0;
              }
            }
          }
        }
        p{
          line-height: 30px;
          font-size: 12px;
          color: #666;
          &.change-red{
            color: red;
          }
        }
        .channels-content-items{
          display: flex;
          flex-wrap: wrap;
          span{
            padding: 4px 20px;
            margin: 6px;
            text-align: center;
            border: 1px solid #ccc;
          }
        }
      }
    }
  }
</style>
