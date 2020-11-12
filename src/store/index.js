import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tags: [
      {
        name: '商会会员',
        path: '/member/commerce'
      },
      {
        name: '商会会员',
        path: '/member/commerce'
      },
      {
        name: '商会会员',
        path: '/member/commerce'
      },
      {
        name: '商会会员',
        path: '/member/commerce'
      }
    ]
  },
  mutations: {
    close (state, payload) {
      state.tags.splice(payload, 1)
    },
    closeAll(state) {
      state.tags = []
    },
    closeOther (state, payload) {
      state.tags = [state.tags.find(v => v.path === payload)]
    }
  },
  actions: {
  },
  modules: {
  }
})
