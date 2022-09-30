import { createStore } from "vuex";

const store = createStore({
  state: {
    person: {
      age: 25,
      name: "AhmetCan",
      lname: "Çömlek",
    },
    theme: "dark",
    fullName: "AhmetCan ÇÖMLEK",
    permissions: [1, 2, 3, 4, 5],
    userList: [
      "Gökhan",
      "Tayfun",
      "İlker",
      "Ramazan",
      "Defne",
      "Kamil",
      "Cemil",
    ],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "Tv", type: "elektronik" },
      { id: 4, title: "Monitör", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" },
    ],
  },
  getters: {
    //state verileri geri döndürme
    woodItems: (state) => state.itemList.filter((i) => i.type == "mobilya"),
  },
});

export default store;
