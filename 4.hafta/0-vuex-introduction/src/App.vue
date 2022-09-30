<template>
  <p>
    <!-- {{$store.state.user}}
    {{$store.state.permissions}} -->
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
    <!-- {{$store.state.fullName}}> -->
  </p>
  <UserList />
  <NewUser />
</template>

<script>
import NewUser from "@/components/NewUser";
import UserList from "@/components/UserList";
export default {
  name: "App",
  components: {
    NewUser,
    UserList,
  },
  created() {
    // console.log(this.$store.state.user);
    // console.log(this.$store.state.theme);
    // //console.log(this.$store.state.itemList.filter((i) => i.type == "mobilya"));
    // console.log(this.$store.getters._woodItems); //getters ile state bilgisine ulaşıldı
    // //console.log(this.$store.getters.activeUser);
    // console.log(this.activeUser);
  },
  //computed: mapGetters(["woodItems","activeUser"]), component içerisinde computed tanımlamada hata alıyoruz bu şekilde kullanılınca
  // computed: {
  //   //...mapGetters(["woodItems", "activeUser"]),1.kullanım
  //   ...mapGetters({
  //     //2.kullanım
  //     woodItems: "_woodItems",
  //     avtiveUser: "_activeUser",
  //   }),
  //   // customComputed() {},
  // },
  // computed: {//computed olarak normal kullanım
  //   mobilyaElemanları() {
  //     return this.$store.getters.woodItems;
  //   },
  // },
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
