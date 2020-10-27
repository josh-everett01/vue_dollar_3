import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    transactions: [
      { type: 'debit', description: 'Supplies', amount: 378.93 },
      { type: 'credit', description: 'Payroll', amount: 1278.32 },
    ],
  },

  getters: {
    getTransactions(state) {
      return state.transactions;
    },
    getTotal(state) {
      let balance = 0;
      if (state.transactions.length) {
        state.transactions.forEach((transaction) => { if (transaction.type === 'credit') { balance += transaction.amount; } else { balance -= transaction.amount; } });
      }
      return balance;
    },

  },

  mutations: {
    addTransaction(state, transaction) {
      state.transactions.unshift(JSON.parse(JSON.stringify(transaction)));
    },
    removeTransaction(state, index) {
      state.transactions.splice(index, 1);
    },
  },

  actions: {
    addTransaction(context, transaction) {
      context.commit('addTransaction', transaction);
    },
    removeTransaction(context, index) {
      context.commit('removeTransaction', index);
    },
  },

});

