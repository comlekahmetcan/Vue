<template>
  <AppHeader />
  <div class="flex flex-row">
    <MySidebar />
    <app-bookmark-list />
  </div>
</template>

<script>
import MySidebar from "@/components/Home/MySidebar";
export default {
  components: {
    MySidebar,
  },
};
</script>