<template>
  <p>
    {{$store.state.user}}
    {{$store.state.permissions}}
    <!-- <ul>
      <li v-for="permissions in $store.state.permissions" :key="permissions">
        {{permissions}}
      </li>
    </ul> -->
    <!-- <ul>
      <li v-for="user in $store.state.userList" :key="user">
        {{user}}
      </li>
    </ul> -->
    <ul>
      <li v-for="(item,index) in $store.getters.woodItems" :key="index">
        {{item.title}}
      </li>
    </ul>
    {{$store.state.fullName}}
    <button @click="updateName">Full Name Bilgisini Değiştirme...!</button>
  </p>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(this.$store.state.user);
    console.log(this.$store.state.theme);
    //console.log(this.$store.state.itemList.filter((i) => i.type == "mobilya"));
    console.log(this.$store.getters.woodItems); //getters ile state bilgisine ulaşıldı
    console.log(this.$store.getters.activeUser);
  },
  methods: {
    updateName() {
      this.$store.state.itemList.push({ id: 6, title: "Raf", type: "mobilya" });
      this.$store.state.fullName = new Date().getTime(); //doğru bir yöntem değildir
    },
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
