<template>
  <div class="container">
    <div class="header">
      <h1>Modal Title</h1>
    </div>
    <hr />
    <div class="content my-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
    <hr />
    <div class="footer">
      <button class="mr-2">Kapat</button>
      <button @click="onSave" class="ml-2 green">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["onSave"],
};
</script>