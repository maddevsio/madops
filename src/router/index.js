import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import { defaultLocale } from '../config/i18n';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: `/${defaultLocale}`,
    },
    {
      path: '/:locale',
      name: 'Home',
      component: Home,
    },
  ],
});
