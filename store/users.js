export const actions = {
  async fetchUsers() {
    try {
      const users = await this.$axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      return users.data
    } catch (err) {
      //   throw err()
    }
  },
}
