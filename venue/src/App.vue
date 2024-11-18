<template>
  <div id="app">
    <NaviBar/>
    <router-view></router-view>
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue';
import NaviBar from './components/NaviBar.vue';
export default {
  name: 'App',
  components: {
    NaviBar
  }
}
</script>

<style>
</style>
