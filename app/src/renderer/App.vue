<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store';
  export default {
    store,
  };
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
  @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
  @import "~vue-material/dist/vue-material.css"
</style>
