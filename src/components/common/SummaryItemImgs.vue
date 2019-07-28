<template>
	<section class='summary'>
			<!--有三张图片的文章摘要-->
			<router-link :to="'/home/article?id=' + item.id">
				<h3 class='summary-title'>{{item.title}}</h3>
				<div class='summary-imgs'>
					<ol>
						<li v-for='(item,index) in item.img' :key='index'>
							<img :src='item'/>
						</li>
					</ol>
				</div>
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
			display: block;
			h3.summary-title{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
				font-size: 18px;
				font-weight: normal;
			}
			.summary-imgs{
				margin: 10px 0;
				ol{
					display: flex;
					justify-content: space-between;
					img{
						width: 110px;
						vertical-align: middle;
					}
				}	
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
	}
</style>
