import Vue from 'vue';
// vue-apollo
import VueApollo from 'vue-apollo';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueAuthenticate from 'vue-authenticate';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import client from '@/apolloClient';

Vue.use(VueApollo);
Vue.use(VueAxios, axios);
Vue.use(VueAuthenticate, {
  providers: {
    github: {
      clientId: 'bc0949511e3596b94c4c',
      redirectUri: 'http://localhost:3000/auth/callback',
    },
  },
});

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: client,
});

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
