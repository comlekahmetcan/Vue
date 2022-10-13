<template>
  <AppHeader />
  <div class="flex flex-row">
    <MySidebar />
    <app-bookmark-list :items="bookmarkList" />
  </div>
</template>

<script>
import MySidebar from "@/components/Home/MySidebar";
export default {
  components: {
    MySidebar,
  },
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((bookmark_list_response) => {
      console.log(bookmark_list_response);
      this.bookmarkList = bookmark_list_response?.data || [];
    });
  },
};
</script>