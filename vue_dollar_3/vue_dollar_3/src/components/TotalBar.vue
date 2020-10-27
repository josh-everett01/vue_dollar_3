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
      let dollar = amount;
      let sign = '$ ';

      if (dollar < 0) {
        sign = '-';
        dollar *= -1;
      }
      return sign + dollar.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
  },
};
</script>
