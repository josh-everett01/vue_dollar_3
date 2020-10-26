import Vue from 'vue';
import Router from 'vue-router';
import TransactionsIndex from '../pages/transactions/index';
import TransactionsCreate from '../pages/transactions/create';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/transactions', component: TransactionsIndex },
    { path: '/transactions/create', component: TransactionsCreate },
  ],
});
