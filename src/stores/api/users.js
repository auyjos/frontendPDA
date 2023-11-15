import { mande } from "mande";
import { defineStore } from "pinia";

const api = mande("https://dummyapi.io/data/v1/user", {
  headers: {
    "app-id": "6552b323719ac241456a0ac1",
  },
});

export const useUsers = defineStore("users", {
  state: () => ({
    error: "",
    users: [],
    selectedUser: null,
  }),

  getters: {
    filteredUsers: (state) => {
      return (userName = "") =>
        state.users.filter((user) => {
          return user.firstName === userName;
        });
    },
  },
  actions: {
    async getUsers() {
      try {
        const result = await api.get();
        this.users = result.data;
      } catch (error) {
        this.error = error;
        // let the form component display the error
        return error;
      }
    },
    async getUser(id) {
      try {
        this.selectedUser = await api.get(id);
      } catch (error) {
        this.error = error;
        // let the form component display the error
        return error;
      }
    },
  },
});
