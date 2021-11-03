import axios from "axios";
const state = {
  tour: [],
  destination: {},
};

const getters = {
  alltours: (state) => state.tour,
  onetour: (state) => state.destination,
};

const actions = {
  fetchtours: async ({ commit }) => {
    const response = await axios.get("http://localhost:8001/api/v1/tour");

    commit("settour", response.data);
  },
  fetchtour: async ({ commit }, id) => {
    const response = await axios.get(`http://localhost:8001/api/v1/tour/${id}`);

    commit("setdestination", response.data);
  },
  deletetour: async ({ commit, dispatch }, id) => {
    const response = await axios.delete(
      `http://localhost:8001/api/v1/tour/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch("fetchtour");
  },
  createtour: async ({ commit, dispatch }, data) => {
    const response = await axios.post(
      "http://localhost:8001/api/v1/tour",
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "multipart/form-data",
        },
      }
    );
    dispatch("fetchtour");

    console.log(data);
  },
};

const mutations = {
  settours: (state, data) => (state.tour = data),
  settour: (state, data) => (state.destination = data),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
