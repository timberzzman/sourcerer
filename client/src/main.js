import Vue from 'vue';
// vue-apollo
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueAuthenticate from 'vue-authenticate';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

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

/*
Vue.prototype.$vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  providers: {
    github: {
      clientId: 'bc0949511e3596b94c4c',
      redirectUri: 'http://localhost:8080/',
    },
  },
});
*/

Vue.config.productionTip = false;
const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem('apollo-token');
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};
// Create an http link:
const link = new HttpLink({
  uri: 'https://api.github.com/graphql',
  fetch,
  headers: getHeaders(),
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: true,
  }),
});

const apolloProvider = new VueApollo({
  defaultClient: client,
});

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
