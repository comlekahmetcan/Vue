export default {
  state: {
    contactName: "puresol",
    contactAddress: "Kanada",
  },
  mutations: {
    setItem(state, name) {
      state.contactName = name;
    },
  },
  getters: {
    _contactName: (state) => state.contactName,
  },
};
