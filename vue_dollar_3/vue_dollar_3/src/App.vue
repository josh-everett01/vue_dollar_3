<template>
  <div id="app">
    <navigation></navigation>
    <total-bar></total-bar>
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import TotalBar from './components/TotalBar';

import './styles/styles.css';

export default {
  name: 'App',
  components: {
    Navigation,
    TotalBar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
