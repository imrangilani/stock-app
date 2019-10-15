import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

import App from './App.vue';

import { routes } from './routes'; // How import works as object
import store from './store/store';

Vue.http.options.root = 'https://vuejs-stock-trader.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
