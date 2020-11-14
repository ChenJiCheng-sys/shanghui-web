import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isCollapse: false,
    tags: []
  },
  mutations: {
    close(state, payload) {
      let oldLen = state.tags.length - 1
      let oldIndex = state.tags[payload].index

      state.tags.splice(payload, 1)
      let tags = state.tags
      if (tags.length !== 0) {
        if (payload === oldLen || oldIndex === location.href.split('#')[1]) location.hash = tags[tags.length - 1].index
      } else {
        location.hash = '/'
      }
    },
    closeAll(state) {
      state.tags = []
      window.location.hash = '/'
    },
    closeOther(state, payload) {
      state.tags = [state.tags.find(v => v.index === payload)]
    },
    changCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    addItem(state, payload) {
      state.tags.push(payload)
    },
    getTags (state, payload) {
      state.tags = payload
    },
    clearTags (state) {
      state.tags = []
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [({commit}) => {
    let tags = JSON.parse(sessionStorage.getItem('tags'))
    tags && commit('getTags', tags)
  }]
})
