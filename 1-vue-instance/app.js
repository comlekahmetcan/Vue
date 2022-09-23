const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js Bootcamp 1.gün",
      content: "Lorem ipsum dolar sit amet..",
      eduflow: {
        title: "Youtube için tıklayınız",
        target: "_blank",
        url: "https://www.youtube.com/",
        alt: "youtube buradan girin",
      },
      owner: "Pogaca",
    };
  },
}).mount("#app");
//vue instances
//String Interpolation - text content olduğu yerlerde çalışır
