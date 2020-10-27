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
        <div v-if="!transaction.description === undefined">
          {{ transaction.description.substring(0, 30) }}
        </div>
      </div>
      <div class="flex">
        <div class="mr-4">{{ formatMoney(transaction.amount) }}</div>
        <div>
          <button @click.prevent="removeTransaction">X</button>
        </div>
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
    removeTransaction(index) {
      this.$store.dispatch('showModal').then(() => {
        this.$store.dispatch('removeTransaction', index);
      });
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
  border-bottom: 1px solid #ccc;
}

.transactions-div {
  display: flex;
}
</style>
