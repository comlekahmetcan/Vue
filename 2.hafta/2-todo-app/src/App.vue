<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr class="my-2" />
    <AddSection />
    <TodoList />
    <ResultBar />
  </div>
</template>

<script>
import AddSection from "@/components/AddSection";
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";
export default {
  components: {
    AddSection,
    TodoList,
    ResultBar,
  },
  created() {
    setTimeout(() => {
      this.todoList = [
        { id: 1, text: "Bootcamp #2" },
        { id: 2, text: "Bootcamp #2.1" },
        { id: 3, text: "Bootcamp #2.2" },
        { id: 4, text: "Bootcamp #2.3" },
        { id: 5, text: "Bootcamp #2.4" },
        { id: 6, text: "Bootcamp #2.5" },
      ];
    }, 2000);
  },
  data() {
    return {
      todoList: [],
    };
  },
  methods: {
    deleteItem(todoItem) {
      this.todoList = this.todoList.filter((t) => t != todoItem);
<<<<<<< HEAD
      // const matchedIndex = this.todoList.findIndex(i=>i == todoItem)
      // if(matchedIndex>-1){
      //   this.todoList.splice(this.todoList[matchedIndex],1)
      // }
=======
      // const matchedIndex = this.todoList.findIndex((i) => i == todoItem);
      // if (matchedIndex > -1) {
      //   this.todoList.splice(this.todoList[matchedIndex], 1);
>>>>>>> 7c39521b6af9211e0ac795ff3ba2cfb007fb63b9
    },
    addNewTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
      });
      event.target.value = "";
    },
  },
};
</script>
