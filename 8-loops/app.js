const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Vue Bootcamp Hafta 1", completed: false },
        { id: 2, text: "Vue Bootcamp Hafta 2", completed: false },
        { id: 3, text: "Vue Bootcamp Hafta 3", completed: false },
        { id: 4, text: "Vue Bootcamp Hafta 4", completed: false },
        { id: 5, text: "Vue Bootcamp Hafta 5", completed: false },
        { id: 6, text: "Vue Bootcamp Hafta 6", completed: false },
        { id: 7, text: "Vue Bootcamp Hafta 7", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push(event.target.value);
      event.target.value = "";
    },
  },
}).mount("#app");
