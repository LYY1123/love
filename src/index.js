import 'less/common.less';

import Vue from 'vue';
import App from './app.vue';
import router from 'router/router.js';
// import "js/service-worker-registration.js"

export default new Vue({
  router,
  components: {
    App
  },
  data: {

  }
}).$mount('#app');
