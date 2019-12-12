import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  cars: {
    id: "",
    immatriculation: "",
    km: ""
  }
}

const mutations = {
  selectCarMutations(state, cars) {
    state.cars = cars[0]
  }
}

const actions = {
  selectCarRequest(store, carId) {
    Vue.http.options.root = 'http://localhost:3000'
    Vue.resource('details').get({id: carId}).then((response) => {
        store.commit('selectCarMutations', response.data)
    })
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  strict : true
})

export default store
