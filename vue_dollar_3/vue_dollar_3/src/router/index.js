import Vue from 'vue';
import Router from 'vue-router';
import TransactionsCreate from '../pages/transactions/create';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/transactions/create', component: TransactionsCreate },
  ],
});
