import axios from "axios";
const state = {
  destinations: [],
  destination: {},
};

const getters = {
  alldestinations: (state) => state.destinations,
  onedestination: (state) => state.destination,
};

const actions = {
  fetchdestinations: async ({ commit }) => {
    const response = await axios.get(
      "http://localhost:8001/api/v1/destinations"
    );

    commit("setdestinations", response.data);
  },
  fetchdestination: async ({ commit }, id) => {
    const response = await axios.get(
      `http://localhost:8001/api/v1/destinations/${id}`
    );

    commit("setdestination", response.data);
  },
  deletedestintions: async ({ commit, dispatch }, id) => {
    const response = await axios.delete(
      `http://localhost:8001/api/v1/destinations/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch("fetchdestinations");
  },
  createdestinations: async ({ commit, dispatch }, data) => {
    const response = await axios.post(
      "http://localhost:8001/api/v1/destinations",
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "multipart/form-data",
        },
      }
    );
    dispatch("fetchdestinations");

    console.log(data);
  },
};

const mutations = {
  setdestinations: (state, data) => (state.destinations = data),
  setdestination: (state, data) => (state.destination = data),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
