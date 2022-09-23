const app = Vue.createApp({
  data() {
    return {
      todoList: ["Todo1", "Todo2", "Todo3", "Todo4"],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push(event.target.value);
      event.target.value = "";
    },
  },
}).mount("#app");
