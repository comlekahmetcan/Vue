<template>
  <div class="container">
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
    <hr />
    <div class="content my-2" v-html="content" ></div>
    <hr />
    <div class="footer">
      <button class="mr-2">Kapat</button>
      <button @click="onSave" class="ml-2 green">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "onSave"],
};
</script>