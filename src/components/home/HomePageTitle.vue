<template>
	<div class='home-page-title'>
		<ul>
			<li @click='showMask'>
					<img src="../../assets/message.png">
			</li>
			<li @click='getData'>
					<h1>包罗万象</h1>
					<img src="../../assets/refresh.png" ref='rotate'>
			</li>
			<li>
				<router-link to='/search'>
					<img src="../../assets/search.png">
				</router-link>
			</li>
		</ul>
		<div class='mask-container' v-show='maskShow'>
			<div class='mask-center'>
				<img src='../../assets/mask.png' />
				<p>已加载好与您兴趣相关的内容</p>
				<router-link to='/download'>立即打开</router-link>
				<div class='close' @click='closeMask'>
					<img src='../../assets/close.png' />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default{
    data(){
      return {
        maskShow: false
      }
    },
    methods: {
			// 点击首页左上角的'信封',弹出遮罩层
      showMask(){
        this.maskShow = true
      },
			// 点击遮罩层的关闭按钮，关闭遮罩层
      closeMask(){
				this.maskShow = false
			},
			// 点击顶部中间的刷新按钮获取当前页面更多de文章列表，顶部中间的刷新按钮会转动
			getData(){
				let angle;
				if(this.$refs.rotate.style.transform){
					angle = parseInt(this.$refs.rotate.style.transform.slice(7)) + 360
				} else{
					angle = 360
				}
				 
				this.$refs.rotate.style.transition = 'all .3s linear';
				this.$refs.rotate.style.transform = 'rotate(' + angle + 'deg)';
				this.$props.getArticles()
			}
    },
		props: ['getArticles']
  }  
</script>

<style lang="scss" scoped>
	.home-page-title{
		ul{
			display: flex;
			height: 44px;
			justify-content: space-between;
			align-items: center;
			background-color: #d43d3d;
			li{
				cursor: pointer;
				&:nth-child(1){
					padding-left: 20px;
					img{
						width: 32px;
					}
				}
				&:nth-child(2){
					h1{
						display: inline-block;
						font-size: 20px;
						font-weight: bolder;
						color: #dee;
						vertical-align: middle;
					}
					img{
						width: 18px;
						vertical-align: middle;
					}
				}
				&:nth-child(3){
					padding-right: 20px;
					a{
						display: inline-block;
						img{
							width: 32px;
						}
					}
				}
			}
		}
		.mask-container{
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0,0,0, .5);
			z-index: 2;
			.mask-center{
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				width: 270px;
				height: 300px;
				margin: auto;
				text-align: center;
				border-radius: 10px;
				background-color: #fff;
				>img{
					width: 165px;
					margin-top: 30px; 
				}
				p{
					line-height: 40px;
					font-size: 18px;
					color: #999;
				}
				a{
					display: block;
					width: 140px;
					margin: 20px auto 0;
					line-height: 40px;
					font-size: 18px;
					border-radius: 8px;
					color: #fff;
					background-color: #f85959;
				}
				.close{
					position: absolute;
					top: 10px;
					right: 10px;
					width: 44px;
					height: 44px;
					text-align: center;
					line-height: 40px;
					border: 1px solid #ccc;
					box-sizing: border-box;
					border-radius: 50%;
					img{
						width: 33px;
						vertical-align: middle;	
					}
				}
			}
		}
	}
</style>
