<template>
  <div class="balance">
    <h2>
      Account Balance <strong> {{ formatMoney(getTotal) }} </strong>
    </h2>
  </div>
</template>

<script>
const mapGetters = require('vuex').mapGetters;

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getTotal']),
  },
  methods: {
    formatMoney(amount) {
      let dollar = amount * 1;
      let sign = '$ ';
      if (dollar < 0) {
        sign = '$ -';
        dollar *= -1;
      }
      if (dollar === 0) {
        return sign + 0;
      }
      return (
        sign + dollar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1, ')
      );
    },
  },
};
</script>
