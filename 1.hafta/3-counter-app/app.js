const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: {
    //bir değişken olarak tanımlanırlar ve değer döndürürler-this ile işleme soktuğumuz verileri kontrol ediyor
    //reactivity işlemi
    getCounterResult() {
      console.log("Counter 1 Çalıştı");
      return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
    getCounter2Result() {
      console.log("Counter 2 Çalıştı");
      return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
  },
  watch: {
    //datamızda computed olan veriyi direk izleyebilmemizi sağlar - değer değiştiğinde çalışır
    counter(newValue, oldValue) {
      console.log("Counter", oldValue, "=>", newValue);
    },
    getCounterResult(newValue, oldValue) {
      console.log("RESULT", oldValue, "=>", newValue);
    },
  },
  //   methods: {
  //     inc() {
  //       this.counter++;
  //     },
  //     dec() {
  //       this.counter--;
  //     },
  //   },
}).mount("#app");
