export const state = () => ({
  users: [],
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const users = await this.$axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      commit('setUsers', users.data)
    } catch (err) {
      //   throw err()
    }
  },
  async fetchUserById(ctx, id) {
    try {
      const user = await this.$axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      return user.data
    } catch (err) {}
  },
}

export const getters = {
  users: (state) => state.users,
}
