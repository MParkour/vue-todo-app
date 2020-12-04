<template>
  <div id="app">
    <div class="p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import UserList from "./components/UserList.vue";

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
