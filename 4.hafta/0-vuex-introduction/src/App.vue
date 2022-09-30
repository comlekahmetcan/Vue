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
      <li v-for="(item,index) in woodItems" :key="index">
        {{item.title}}
      </li>
    </ul>
    {{$store.state.fullName}}
    <button @click="updateName">Full Name Bilgisini Değiştirme...!</button>
  </p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  created() {
    console.log(this.$store.state.user);
    console.log(this.$store.state.theme);
    //console.log(this.$store.state.itemList.filter((i) => i.type == "mobilya"));
    console.log(this.$store.getters._woodItems); //getters ile state bilgisine ulaşıldı
    //console.log(this.$store.getters.activeUser);
    console.log(this.activeUser);
  },
  methods: {
    updateName() {
      this.$store.state.itemList.push({ id: 6, title: "Raf", type: "mobilya" });
      this.$store.state.fullName = new Date().getTime(); //doğru bir yöntem değildir
    },
  },
  //computed: mapGetters(["woodItems","activeUser"]), component içerisinde computed tanımlamada hata alıyoruz bu şekilde kullanılınca
  computed: {
    //...mapGetters(["woodItems", "activeUser"]),1.kullanım
    ...mapGetters({//2.kullanım
      woodItems: "_woodItems",
      avtiveUser: "_activeUser",
    }),
    // customComputed() {},
  },
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
