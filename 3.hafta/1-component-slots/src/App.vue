<template>
  <Modal :onSave="onSave" />
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
  },
  methods: {
    onSave() {
      alert("Saved!!");
    },
  },
};
</script>