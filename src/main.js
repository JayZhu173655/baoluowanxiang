import Vue from 'vue';
import App from './App.vue';
// 解决ie不支持vue问题
import 'babel-polyfill';
import MintUI from 'mint-ui';
import router from './router/router';
import store from './store/index';
import VueResource from 'vue-resource';
import 'mint-ui/lib/style.css';
import './assets/normalize.css';

// 把mint-ui挂载到Vue上，不过这里没使用
Vue.use(MintUI);
// 请求接口用的vue-resource
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
