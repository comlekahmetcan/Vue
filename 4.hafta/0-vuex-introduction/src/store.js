import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      age: 25,
      name: "AhmetCan",
      lname: "Çömlek",
      adres: {},
      password: 1231123123,
      tc: 111111,
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
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  actions: {
    newItem({ commit }, item) {//newItem(context, item)
      console.log(item);
      setTimeout(() => {
        commit("newItem", item);
        // context.commit("newItem", item);
      }, 2000);
    },
  },
  getters: {
    //state verileri geri döndürme
    _woodItems: (state) => state.itemList.filter((i) => i.type == "mobilya"),
    _activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
});

export default store;
