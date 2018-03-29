import Vue from 'vue';
import Router from 'vue-router';

import lovePage from 'components/homePage.vue';

Vue.use(Router);

const vueRouter = new Router({
  routes: [
    {
      path: '',
      name: '',
      redirect: 'love'
    },
    {
      path: '/love',
      name: 'love',
      component: lovePage
    }
  ]
});

export default vueRouter;
