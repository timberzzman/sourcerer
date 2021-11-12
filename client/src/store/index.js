import Vue from 'vue';
import Vuex from 'vuex';
// import VueAuthenticate from 'vue-authenticate';

Vue.use(Vuex);
/*
const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  providers: {
    github: {
      clientId: 'bc0949511e3596b94c4c',
      redirectUri: 'http://localhost:8080/auth/callback',
    },
  },
}); */

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    token: '',
  },
  getters: {
    isAuthenticated() {
      // return vueAuth.isAuthenticated();
    },
  },
  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
    },
  },
  actions: {
    /* authenticate(context, payload) {
      vueAuth.authenticate(payload.provider).then((response) => {
        console.log(response);
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuth.isAuthenticated(),
        });
      });
    },
    login(context, payload) {
      vueAuth.login(payload.user, payload.requestOptions).then((response) => {
        console.log(response);
        context.commit('isAuthenticated', {
          isAuthenticated: vueAuth.isAuthenticated(),
        });
      });
    }, */
  },
  modules: {
  },
});
