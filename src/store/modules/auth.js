//store/modules/auth.js

import axios from "axios";
const state = {
  user: null,
  posts: null,
  token: localStorage.getItem("token"),
};
const getters = {
  isAuthenticated: (state) => !!state.token,

  StateUser: (state) => state.user,
};

const actions = {
  LogIn: async ({ commit }, User) => {
    console.log(User);
    const response = await axios.post(
      `http://localhost:8001/api/v1/users/login`,
      User
    );
    localStorage.setItem("token", response.data.token);
    await commit("setUser", response.data.data.user.name);
  },
  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};
const mutations = {
  setUser(state, username) {
    state.user = username;
  },

  LogOut(state) {
    state.user = null;
    state.posts = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
