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
  },
});

export default store;
