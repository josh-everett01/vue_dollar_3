<template>
  <div id="app">
    <navigation></navigation>
    <total-bar></total-bar>
    <modal></modal>
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import TotalBar from './components/TotalBar';
import Modal from './components/Modal';

import './styles/styles.css';

export default {
  name: 'App',
  components: {
    Navigation,
    TotalBar,
    Modal,
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
