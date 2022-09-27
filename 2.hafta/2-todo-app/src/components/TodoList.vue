<template>
  <ul>
    <TodoListItem
      v-for="todoItem in provideData.todoList"
      :key="todoItem.id"
      :item="todoItem"
    />
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
export default {
  //props: ["myData"],
  inject: ["provideData"],
  //   data(){
  //     return{
  //         myData:""
  //     }
  //   },
  //   props: {diger kullanım
  //     mydata: {
  //       type: String,
  //       required: false,
  //       defaults: "",
  //     },
  //   },
  components: {
    TodoListItem,
  },
};
</script>
