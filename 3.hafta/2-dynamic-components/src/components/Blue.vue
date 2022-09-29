<template>
  <h3 class="bg-blue text-white">Blue Component</h3>
  <input type="text" />
</template>

<script>
export default {
  mounted() {
    console.log("Blue Mounted");
  },
  activated() {//keep-alive life-cycle-hooks
    console.log("Blue Activated");
  },
  deactivated() {//keep-alive life-cycle-hooks
    console.log("Blue Deactivated ");
  },
};
</script>