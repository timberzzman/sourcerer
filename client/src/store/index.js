/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import Vuex from 'vuex';
import gql from 'graphql-tag';
import apollo from '@/apolloClient';

Vue.use(Vuex);

const UserInfos = gql`
  query GetUserInfos {
    viewer {
      login
      avatarUrl
      bio
      company
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      location
      name
      url
      contributionsCollection {
        totalCommitContributions
      }
      repositories(ownerAffiliations: OWNER) {
        totalCount
      }
      twitterUsername
      websiteUrl
      email
    }
  }
`;

const UserRepositoriesInfos = gql`
  query GetUserInfos {
    viewer {
      repositories(last: 100) {
        nodes {
          languages(first: 10) {
            nodes {
              name
              color
            }
          }
          name
          createdAt
          description
          owner {
            login
          }
        }
      }
    }
  }
`;

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    token: '',
    userData: {},
  },
  getters: {
    isAuthenticated() {
      return this._vm.$auth.isAuthenticated();
    },
    getUserData(state) {
      return state.userData;
    },
  },
  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
    },
    setUserData(state, payload) {
      state.userData = { ...state.userData, ...payload };
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
    async getUserData({ commit }) {
      const response = await apollo.query({
        query: UserInfos,
      });
      console.log(response.data);
      commit('setUserData', response.data.viewer);
    },
    async getRepositories({ commit }) {
      const response = await apollo.query({
        query: UserRepositoriesInfos,
      });
      console.log(response.data);
      commit('setUserData', response.data.viewer);
    },
  },
  modules: {
  },
});
