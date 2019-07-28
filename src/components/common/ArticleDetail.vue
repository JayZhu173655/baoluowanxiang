<template>
  <div class='article'>
    <!--文章详情页面组件-->
    <DownloadApp></DownloadApp>
    <div class='article-shadow'></div>
    <div class='article-container'>
      <div class='article-content' ref='articleContent'>
        <h1 class='article-content-title'>{{content.title}}</h1>
        <div class='article-content-info'>
          <div class='info-left'>
            <img :src='content.photo' class='info-photo'/>
            <span class='info-author'>{{content.author}}</span>
            <img src='../../assets/v-mark.png' class='info-mark'/>
            <span class='info-original' v-if='content.original'>原创</span>
          </div>
          <p class='info-right'>
            <span class='info-time' v-if='content.time'>{{content.time}}</span>
            <span>.</span>
            <span class='info-comment' v-if='content.haveComment'>{{content.commentNum}}评论</span>
          </p>
        </div>
        <div v-html='content.detail' class='content-detail'></div>
        <div class='article-content-more' v-if='showMore'>
          <p class='more-display' @click='displayMore'>
            <span></span>
          </p>
          <p class='more-download' @click='goDownloadApp'>打开App阅读全文</p>
        </div>
      </div>
    </div>
    <DownloadApp></DownloadApp>
  </div>
</template>

<script>
  import DownloadApp from './DownloadApp.vue';
  export default{
    data(){
      return {
        showMore: null,
        content: {}
      }
    },
    components: {
      DownloadApp
    },
    methods: {
      // 点击获取更多按钮内容显示全部内容
      displayMore(){
        this.showMore = false;
        this.$refs.articleContent.style.height = 'auto';
      },
      // 点击进入下载App页面
      goDownloadApp(){
        this.$router.push({path: '/download'})
      }
    },
    created(){
      // console.log(this.$route.query.id), 通过文章id获取不同文章的详细信息
      // 这里就模拟下请求数据，所有文章都是请求一个地址
      this.$http.get('/src/api/article.json')
          .then(res => {
            if(res.body.success){
              // 这里vue中的数据，如果有两层以上的对象，则数据第一层之后无法获取到
              // 如数据是对象，然后对象里面又有一个对象结构的数据，
              // 那么这个数据会引起报错，即这个数据会被认为没定义
              this.content = res.body.content;
            }
          })
          .catch(err => {
            throw err;
          });
    },
    mounted(){
      // 判断article-content类的高度有没有超过700px，超过就显示加载更过，不然不显示
      // 在mounted周期函数中DOM不一定全部已经生成，所以获取样式有问题
      // 可以使用异步操作来获取元素高度
      setTimeout(() => {
        // 异步获取到真实的动态DOM节点的高度
        let articleContentRealHeight = parseInt(getComputedStyle(this.$refs.articleContent).height);
        console.log(articleContentRealHeight)
        if(articleContentRealHeight > 700){
          this.showMore = true
          this.$refs.articleContent.style.height = '700px';
          this.$refs.articleContent.style.overflow = 'hidden';
        }
      },0)
      
      
      /*
      // 这样只能获取静态页面的，动态的获取不到真实高度
      let articleContentRealHeight = parseInt(getComputedStyle(this.$refs.articleContent).height);
      
      if(articleContentRealHeight > 700){
        this.showMore = true
        this.$refs.articleContent.style.height = '700px';
        this.$refs.articleContent.style.overflow = 'hidden';
      }
      */
    }
  }  
</script>

<style lang="scss" scoped>
  .article{
    .article-shadow{
      height: 1px;
      background-color: rgba(0,0,0, .2);
      box-shadow: 0 0 3px 1px rgba(0,0,0, .2);
    }
    .article-container{
      padding: 20px 12px;
      .article-content{
        position: relative;
        h1.article-content-title{
          font-size: 24px;
          line-height: 36px;
          font-weight: normal;
          color: #222;
        }
        .article-content-info{
          display: flex;
          justify-content: space-between;
          align-items: middle;
          padding: 16px 0 10px;
          .info-left{
            .info-photo{
              width: 24px;
              height: 24px;
              vertical-align: middle;
              border-radius: 50%;
            }
            .info-author{
              vertical-align: middle;
              font-size: 14px;
              color: #222;
              font-weight: bold;
            }
            .info-mark{
              vertical-align: middle;
              width: 14px;
              height: 14px;
            }
            .info-original{
              vertical-align: middle;
              padding: 0 2px;
              font-size: 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
            }
          }
          .info-right{
            font-size: 12px;
            color: #999;
            span{
              vertical-align: middle;
            }
          }
        }
        // 后面请求数据动态产生的元素的样式不会生效的解决方法，元素前使用/deep/就可以让样式生效
        &.article-content /deep/ .content-detail{
          >p{
            margin-top: 20px;
            font-size: 18px;
            color: #222;
          }
          .content-video-box{
            video{
              width: 100%;
            }
          }
          .content-talk{
            font-size: 16px;
            padding: 15px;
            margin-top: 15px;
            color: #505050;
            border: 1px solid #E8E8E8;
            background: #F4F5F6;
            p{
              line-height: 22px;
              &:nth-child(1){
                line-height: 30px;
                font-size: 18px;
                font-weight: bold;
              }
            }
          }
          >img{
            width: 100%;
            margin-top: 15px;
            vertical-align: middle;
          }
          .content-download-app{
            display: block;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            color: #505050;
            border: 1px solid rgba(228,228,228,.6);
            border-top: none;
            background-color: #fbfbfb;
          }
        }
        .article-content-more{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-image: -webkit-linear-gradient(top,rgba(255,255,255,0),rgba(255,255,255,.9),rgba(255,255,255,1));
          background-image: linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,.9),rgba(255,255,255,1));
          .more-display{
            padding-top: 100px;
            text-align: center;
            span{
              display: inline-block;
              width: 16px;
              height: 16px;
              animation: moreContent .8s linear infinite alternate;
              background-image: url('../../assets/more.png');
              background-size: cover;
            }
            @keyframes moreContent{
              from {
                transform: translateY(0);
              }
              to {
                transform: translateY(-10px);
              }
            }
          }
          .more-download{
            margin-top: 10px; 
            text-align: center;
            line-height: 40px;
            border-radius: 8px;
            color: #fff;
            background-color: #ff5050;
          }
        }
      }
    }
  }
</style>
