const app = Vue.createApp({
  data() {
    return {
      fullName: "Küpeli",
    };
  },
  methods: {
    updateValue(kamil) {
      //console.log(event.target.value);
      this.fullName = kamil.target.value;
    },
  },
}).mount("#app");
