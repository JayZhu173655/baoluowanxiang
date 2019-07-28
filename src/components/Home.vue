<template>
  <div class='home-page'>
    <div class='home-page-top'>
      <HomePageTitle :getArticles='getArticles'></HomePageTitle>
      <HomePageNavbar @changeCurrentChannel='changeCurrentChannel'></HomePageNavbar>
      <HomePageNotice></HomePageNotice>
    </div>
    <Main :articles='articles'></Main>
    <Footer></Footer>
  </div>
</template>

<script>
  import HomePageTitle from './home/HomePageTitle.vue';
  import HomePageNavbar from './home/HomePageNavbar.vue';
  import HomePageNotice from './home/HomePageNotice.vue';
  import Main from './Main.vue';
  import Footer from './Footer.vue';
  export default{
    data(){
      return {
        articles: [],
        currentChannel: 'summary',
        prevChannel: 'summary'
      }
    },
    components: {
     HomePageNavbar,
     HomePageTitle,
     Main,
     Footer,
     HomePageNotice
    },
    methods: {
      // 获取和导航对应的资讯的文章列表数据
      getArticles(){
        this.$http.get('/src/api/' + this.currentChannel +'.json')
          .then(res => {
            if(res.body.success){
              if(this.prevChannel === this.currentChannel){
                this.articles =  this.articles.concat(res.body.articles);
              } else{
                this.articles =  res.body.articles;
              }
            }
          })
          .catch(err => {
            throw err
          })
      
      },
      // 点击导航的资讯栏，获取不同的文章，并改变prevChannel、currentChannel的值
      changeCurrentChannel(name){
        this.prevChannel = this.currentChannel;
        this.currentChannel = name;
        if(this.prevChannel !== this.currentChannel){
          this.getArticles()
        }
      },
      // 滚动鼠标，获取更多文章列表
      listenerScroll(){
        // 由于各个浏览器之间的差异，建议用兼容写法，建议百度
        // 下面附上scdn连接：https://blog.csdn.net/Jack_zengzhen/article/details/79013841 
        // 自己多动手测试，不要一味相信别人的成果
        /* 
            以内不同浏览器中其中一个值一直为零，所以可以判断下
            滚动条滚动位置高度：document.documentElement.scrollTop
                        或document.body.scrollTop
            滚动条滚动位置的高度：
                      let scrollPosition;
                      if(document.documentElement.scrollTop){
                        scrollPosition = document.documentElement.scrollTop
                      } else{
                        scrollPosition = document.body.scrollTop
                      }
                      或者直接两个值相加，操作简单，代码量少
                      scrollPosition = document.documentElement.scrollTop + document.body.scrollTop
        */
        /*
           滚动区域高度：parseInt(document.documentElement.scrollHeight)
                      或parseInt(document.body.scrollHeight)

           滚动区域高度 = (document.documentElement.scrollHeight - document.body.scrollHeight) > 0 ? document.documentElement.scrollHeight : document.body.scrollHeight
        */   
        // 视窗高度：document.documentElement.clientHeight
        // 文档高度（所有内容高度）：document.body.clientHeight
        let scrollContentHeight = (document.documentElement.scrollHeight - document.body.scrollHeight) > 0 ? document.documentElement.scrollHeight : document.body.scrollHeight;
        let scrollContentTop = document.documentElement.scrollTop + document.body.scrollTop;
        let screenHeight = document.documentElement.clientHeight;
        if(scrollContentTop >= ((scrollContentHeight - screenHeight) *0.9)){
          this.getArticles()
        }
      }
    },
    created(){
      this.getArticles('summary');
    },
    mounted(){
      document.addEventListener('scroll',this.listenerScroll);
      /*
      // 这里六个函数获取的值和上面的监听事件内获取的值有区别
        console.log(document.documentElement.scrollHeight,document.body.scrollHeight);
        console.log(document.documentElement.scrollTop,document.body.scrollTop);
        console.log(document.documentElement.clientHeight,document.body.clientHeight)
      */
    }
  }  
</script>

<style lang="scss" scoped>
  .home-page{
    .home-page-top{
      position: fixed;
      width: 100%;
      z-index: 1;
    }
  }
</style>
