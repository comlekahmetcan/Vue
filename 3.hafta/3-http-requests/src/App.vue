<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave" />
    </div>
    <ul>
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 1</span>
        <button class="sm red">Sil</button>
      </li>
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 1</span>
        <button class="sm red">Sil</button>
      </li>
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 1</span>
        <button class="sm red">Sil</button>
      </li>
    </ul>
    <small class="mt-2 text-blue d-flex justify-content-end align-items-center"
      >5 adet alınacak ürün vardır</small
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemList: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((items_response) => {
      console.log(items_response);
      this.itemList = items_response.data || [];
      console.log("this.itemList", this.itemList);
    });
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false,
      };
      axios
        .post("http://localhost:3000/items", saveObject)
        .then((save_response) => {
          console.log(save_response);
          e.target.value = "";
          e.target.focus();
        });
    },
  },
};
</script>