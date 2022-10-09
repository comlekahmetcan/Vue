<template>
  <h1>{{ $route.params.userID }}</h1>
  <p>Açıklamalar burada yer alacaktır..</p>
  <!-- <p>{{ $route.params.userID }}</p> -->
  <button @click="goBack">Geri Dön</button>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
  methods: {
    goBack() {
      this.$route.push("/");
    },
  },
};
</script>