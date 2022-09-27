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
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    //fonksiyonlar içerecek
    changeTitle(pTitle) {
      this.title = pTitle;
    },
    updateCoords(message, event) {
      //console.log(message, event.x, event.y);
      this.changeTitle(`${event.x},${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
//vue instances
/*String Interpolation - text content olduğu yerlerde çalışır
Data içerisinde ki veriyi cağırabildiğimiz gibi, metotlarda kullanılabilir, JS koduda yazılabilir
*/
