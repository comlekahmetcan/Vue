<template>
  <ul>
    {{myData}}
    <TodoListItem v-for="i in 10" :key="i" />
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
export default {
  props: ["myData"],
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
