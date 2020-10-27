import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    transactions: [
      { type: 'debit', description: 'Something responsible', amount: 378.93 },
      { type: 'credit', description: 'Payroll', amount: 1278.32 },
    ],
  },

  getters: {
    getTransactions(state) {
      return state.transactions;
    },

  },

  mutations: {
    addTransaction(state, transaction) {
      state.transactions.unshift(JSON.parse(JSON.stringify(transaction)));
      // eslint-disable-next-line no-console
    },
  },

  actions: {
    addTransaction(context, transaction) {
      context.commit('addTransaction', transaction);
    },
  },

});

