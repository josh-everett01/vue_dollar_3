<template>
  <div class="flex flex-col items-center">
    <h1>My Transactions</h1>

    <div
      v-for="(transaction, index) in getTransactions"
      :key="index"
      class="transaction"
    >
      <div class="transactions-div">
        <div class="w-20">
          <plus-sign
            v-if="transaction.type === 'credit'"
            class="text-green-500"
          ></plus-sign>
          <minus-sign v-else class="text-red-600"></minus-sign>
        </div>
        <div>{{ transaction.description.substring(0, 30) }}</div>
      </div>
      <div class="amount">
        {{ formatMoney(transaction.amount) }}
      </div>
    </div>
  </div>
</template>

<script>
const mapGetters = require('vuex').mapGetters;
const PlusSign = require('../../components/ui/PlusSign').default;
const MinusSign = require('../../components/ui/MinusSign').default;

export default {
  data() {
    return {
      transaction: {},
    };
  },
  components: {
    PlusSign,
    MinusSign,
  },
  computed: {
    ...mapGetters(['getTransactions']),
  },
  methods: {
    formatMoney(amount) {
      let dollar = amount;
      let sign = '$';

      if (dollar < 0) {
        sign = '- ';
        dollar *= -1;
      }
      return sign + dollar.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: revert;
}

.transaction {
  display: flex;
  justify-content: space-between;
  width: 20em;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.transactions-div {
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 10%;
}
.amount {
  margin-top: 10%;
}
</style>
