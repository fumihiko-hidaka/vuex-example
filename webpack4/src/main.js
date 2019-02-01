import Vue from 'vue'
import Example from './example.vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(Example)
});
