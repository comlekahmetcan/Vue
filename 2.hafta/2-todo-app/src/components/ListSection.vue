<template>
  <TodoList @delete-todo-item="$emit('delete-todo-item', $event)" :myData="todoList" />
  <ResultBar :itemCount="todoList.length" />
</template>

<script>
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";
export default {
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoList,
    ResultBar,
  },
};
</script>
