<template>
  <p>
    {{$store.state.person}}
    {{$store.state.permissions}}
    <ul>
      <li v-for="permissions in $store.state.permissions" :key="permissions">
        {{permissions}}
      </li>
    </ul>
    <ul>
      <li v-for="user in $store.state.userList" :key="user">
        {{user}}
      </li>
    </ul>
  </p>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(this.$store.state.person);
    console.log(this.$store.state.theme);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
