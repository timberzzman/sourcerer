/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
    authenticate(context, payload) {
      console.log(this._vm.$auth);
      this._vm.$auth.authenticate(payload.provider).then((response) => {
        console.log(response);
        context.commit('isAuthenticated', {
          isAuthenticated: this._vm.$auth.isAuthenticated(),
        });
      });
    },
    login(context, payload) {
      this._vm.$auth.login(payload.user, payload.requestOptions).then((response) => {
        console.log(response);
        context.commit('isAuthenticated', {
          isAuthenticated: this._vm.$auth.isAuthenticated(),
        });
      });
    },
  },
  modules: {
  },
});
