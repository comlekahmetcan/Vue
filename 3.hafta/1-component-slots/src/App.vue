<template>
  <Modal :onSave="onSave" :title="'Modal Title'" :content="content" />
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      content: `<h3 class="text-red">title</h3>`,
    };
  },
  methods: {
    onSave() {
      alert("Saved!!");
    },
  },
};
</script>