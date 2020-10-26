import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    transactions: [],
  },

  getters: {

  },

  mutations: {
    addTransaction(state, transaction) {
      state.transactions.unshift(JSON.parse(JSON.stringify(transaction)));
      debugger;
      // eslint-disable-next-line no-console
    },
  },

  actions: {
    addTransaction(context, transaction) {
      context.commit('addTransaction', transaction);
    },
  },

});

