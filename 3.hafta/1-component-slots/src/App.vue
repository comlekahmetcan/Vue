<template>
  <!-- <Modal :onSave="onSave" :title="'Modal Title'" :content="content" /> -->
  <Modal>
    <template #title>
      <h3>Slot ile Gelen Title Bilgisi</h3>
    </template>

    <!-- <template #content>
      <p class="text-green">Lorem impsum dolar sit amet...</p>
    </template> -->
    <template v-slot:content>
      <p class="text-green">Lorem impsum dolar sit amet...</p>
    </template>

    <template #default> Bu default olarak gösterilecek...! </template>
  </Modal>
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