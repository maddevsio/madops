// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import App from './App';
import router from './router';
import Header from './components/Header';
import Footer from './components/Footer';

Vue.config.productionTip = false;
Vue.component('Header', Header);
Vue.component('Footer', Footer);

Vue.use(VueAnalytics, {
  id: 'UA-122918926-1',
  router,
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
