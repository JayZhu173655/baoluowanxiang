import Vue from 'vue';
import Vuex from 'vuex';

// 把Vuex挂载到Vue上
Vue.use(Vuex);

// 创建Vuex实例
const store = new Vuex.Store({
  state: {
    channels: {
      showChannels: [
        {
          id: 1,
          name: '推荐',
          url: 'summary'
        },
        {
          id: 2,
          name: '美文',
          url: 'essay'
        },
        {
          id: 3,
          name: '社会',
          url: 'society'
        },
        {
          id: 4,
          name: '热点',
          url: 'hot'
        },
        {
          id: 5,
          name: '科技',
          url: 'tech'
        },
        {
          id: 6,
          name: '汽车',
          url: 'car'
        },
        {
          id: 7,
          name: '军事',
          url: 'military'
        },
        {
          id: 8,
          name: '国际',
          url: 'world'
        },
        {
          id: 9,
          name: '旅游',
          url: 'travel'
        },
        {
          id: 10,
          name: '历史',
          url: 'history'
        },
        {
          id: 11,
          name: '美食',
          url: 'food'
        },
        {
          id: 12,
          name: '探索',
          url: 'discovery'
        }
      ],
      hideChannels: [  
        {
          id: 13,
          name: '娱乐',
          url: 'entertainment'
        },
        {
          id: 14,
          name: '体育',
          url: 'sports'
        },
        {
          id: 15,
          name: '财经',
          url: 'finance'
        },
        {
          id: 16,
          name: '时尚',
          url: 'fashion'
        },
        {
          id: 17,
          name: '游戏',
          url: 'game'
        },
        {
          id: 18,
          name: '育儿',
          url: 'baby'
        },
        {
          id: 19,
          name: '养生',
          url: 'regimen'
        },
        {
          id: 20,
          name: '故事',
          url: 'story'
        }
      ]
    }
  },
  mutations: {
    // 修改数据的方法  增加删除资讯页面操作store中的channels数据变化
    // 增加资讯
    add(state,id){
      let index = state.channels.hideChannels.findIndex(function(item){
        return item.id === id
      })
      
      let arr = state.channels.hideChannels.splice(index,1);
      state.channels.showChannels.push(arr[0])
      localStorage.setItem('channels',JSON.stringify(state.channels));
    },
    // 删除资讯
    reduce(state,id){
      let index = state.channels.showChannels.findIndex(function(item){
        return item.id === id
      });
      let arr = state.channels.showChannels.splice(index,1);
      state.channels.hideChannels.push(arr[0]);
      localStorage.setItem('channels',JSON.stringify(state.channels))
    },
    // 如果本地存储localStorage上有channels则store中更新和本地存储保持一致
    checkChannels(state,channels){
      state.channels = channels;
    }
  },
  actions: {
    /*
    addFun(context,id){
      context.commit('add',id);
    },
    reduceFun(context,id){
      context.commit('reduce',id)
    }
    */
  }
});

export default store;