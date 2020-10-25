<template>
  <nav>
    <router-link to="/transactions">Transactions</router-link>
    <router-link to="/transactions"
      ><img
        src="http://www.sunshinedaydream.biz/assets/images/patches/thumbnails/jerry-garcia-walking-with-b_thumbnail.jpg"
        alt=""
    /></router-link>
    <router-link to="/transactions/create">Create Transaction</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
}
a {
  align-self: center;
}
</style>
