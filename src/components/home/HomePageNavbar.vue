<template>
	<div class='home-page-top-navbar'>
		<div class='home-page-top-main'>
			<ol>
				<li 
					v-for='(item,index) in list'
					:class= 'index === 0 ? "active" : ""'
					:key='item.id'
				>
					<a :data-url-name='item.url' href='javascript:void(0)'>{{item.name}}</a>
				</li>
			</ol>
		</div>
		<router-link class='home-page-top-navbar-add' to='/channels'>
		</router-link>
	</div>
</template>

<script>
  export default{
    data(){
      return {
        list: []
      }
    },
    created(){
			// 获取当行的所有资讯，本地有就从本地获取，否则就获取store中的数据
			if(localStorage.getItem('channels')){
				this.list = JSON.parse(localStorage.getItem('channels')).showChannels
			} else{
      	this.list=this.$store.state.channels.showChannels
			};
    },
    mounted(){
			let _this = this;
			const navbar = document.getElementsByClassName('home-page-top-main')[0];
      const navbarItems = navbar.getElementsByTagName('li');
			const navbarOl = navbar.getElementsByTagName('ol')[0];
			const len = navbarItems.length;
			const itemWidth = Math.floor(parseInt(getStyle(navbarItems[0],'width'))) + 2*Math.floor(parseInt(getStyle(navbarItems[0],'padding-left')));
			// 获取导航总宽度的兼容写法
			function getStyle(el,attr){
				if(el.currentStyle){
					return el.currentStyle[attr];
				} else{
					return getComputedStyle(el)[attr];
				}
			};
			// 点击资讯项目，然后滚动条移动，使其处于中间位置
			let index = 0;
			for(let i = 0; i < len; i++){
				navbarItems[i].onclick = function(){
					navbarItems[index].classList.remove('active');
					navbarItems[i].classList.add('active');
					// 获取点击的资讯的名称（请求数据的英语名称）
					let urlName = navbarItems[i].children[0].getAttribute('data-url-name');
					// 注意this指向,当自组建调用父组件传递的函数时，不传参可以使用this.$props.函数名()调用
					// 如果需要向父组件传数据，则需要this.$emit('函数名', 参数)调用
					// 父组件向子组件传递函数最好用v-on:函数名='函数名'或者@函数名='函数名
					// 然后使用this.$emit调用,推荐这种用法
					_this.$emit('changeCurrentChannel',urlName);
					index = i;
					if(i>3){
						let distance = (i - 3) * itemWidth;
						navbarOl.scrollLeft = distance
					} else{
						navbarOl.scrollLeft = 0
					}
				}
			}
    },
		props: ['changeCurrentChannel']
  }  
</script>

<style lang="scss" scoped>
	.home-page-top-navbar{
		display: flex;
		height: 36px;
		justify-content: space-between;
		background-color: #f4f5f6;
		border-bottom: 1px solid #ccc;
		.home-page-top-main{
			width: 90%;
			ol{
				overflow-x: scroll;
				white-space: nowrap;
				li{
					display: inline-block;
					padding: 0 10px;
					line-height: 36px;
					a{
						cursor: pointer;
					}
					&.active{
						a{
							color: #f85959;
						}
					}
				}
			}
		}
		.home-page-top-navbar-add{
			position: relative;
			width: 10%;
			cursor: pointer;
			background-color: #fff;
			&::before{
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				content: '';
				width: 4px;
				height: 60%;
				margin: auto;
				background-color: #f85959;
			}
			&::after{
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				content: '';
				width: 4px;
				height: 60%;
				margin: auto;
				transform: rotate(90deg);
				background-color: #f85959;
			}
		}
	}
</style>
