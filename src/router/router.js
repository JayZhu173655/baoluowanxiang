import Vue from 'vue'
import VueRouter from 'vue-router';

// 引入路由组件
import Home from '../components/Home.vue';
import Search from '../components/Search.vue';
import DownloadApp from '../components/DownloadApp.vue';
import Channels from '../components/Channels.vue';
import ArticleDetail from '../components/common/ArticleDetail.vue';

// 挂在到Vue上
Vue.use(VueRouter);

// 匹配路由规则
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/download',
        component: DownloadApp 
    },
    {
        path: '/channels',
        component: Channels 
    },
    {
        path: '/home/article',
        component: ArticleDetail 
    },
    {
        path: '*',
        redirect: '/home'  
    }
]

// 创建路由并导出
const router=new VueRouter({
    routes
});
export default router;