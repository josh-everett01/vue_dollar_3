<template>
  <div class="flex flex-col items-center">
    <h1>My Transactions</h1>

    <div
      v-for="transaction in getTransactions"
      :key="transaction"
      class="transaction"
    >
      <div class="transactions-div">
        <div class="w-20">{{ transaction.type }}</div>
        <div>{{ transaction.description.substring(0, 30) }}</div>
      </div>
      {{ transaction.amount }}
    </div>
  </div>
</template>

<script>
const mapGetters = require('vuex').mapGetters;

export default {
  data() {
    return {
      transaction: {},
    };
  },
  computed: {
    ...mapGetters(['getTransactions']),
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
}
</style>
