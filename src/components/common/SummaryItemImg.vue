<template>
	<section class='summary'>
		<!--有一张图片的文章摘要-->
		<router-link :to="'/home/article?id=' + item.id">
				<div class='summary-left'>
					<h3 class='summary-title'>{{item.title}}</h3>
					<ul class='summary-about'>
						<li class='summary-about-front' v-if='item.sign'>
							<span>{{item.sign}}</span>
						</li>
						<li class='summary-about-author'>
							<span>{{item.author}}</span>
						</li>
						<li class='summary-about-comment'>
							评论
							<span>{{item.comment}}</span>
						</li>
						<li class='summary-about-time' v-if='item.time'>
							<span>{{item.time}}</span>
						</li>
					</ul>
				</div>
				<div class='summary-right'>
					<img :src="item.img[0]">
				</div>
		</router-link>
	</section>
</template>

<script>
  export default{
		props: ['item']
  }  
</script>

<style lang="scss" scoped>
  .summary{
		padding: 20px 0;
		border-bottom: 1px solid #ccc;
		a{
			display: flex;
			.summary-left{
				width: 70%;
				h3.summary-title{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
					font-size: 18px;
					font-weight: normal;
				}
				ul.summary-about{
					display: flex;
					margin-top: 10px;
					font-size: 12px;
					color: #999;
					li{
						margin-right: 6px;
							&.summary-about-front{
								span{
								display: inline-block;
								padding: 0 2px;
								transform: scale(0.8);
								border: 1px solid rgba(248,89,89,.5);
								color: #f85959;
							}
						}
					}
				}
			}
			.summary-right{
				position: relative;
				width: 30%;
				img{
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					width: 110px;
					margin: auto;
					vertical-align: middle;
					z-index: 0;
				}
			}
		}
	}
</style>
