<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">Navbar</nuxt-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link
                exact
                active-class="active"
                class="nav-link"
                aria-current="page"
                to="/"
                >Home</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                no-prefetch
                active-class="active"
                to="/users"
                >Users</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" active-class="active" to="/about"
                >About</nuxt-link
              >
            </li>
            <li v-if="!isAuth" class="nav-item">
              <nuxt-link class="nav-link" active-class="active" to="/Login"
                >Login</nuxt-link
              >
            </li>
            <li v-else-if="isAuth" class="nav-item">
              <a href="#" class="nav-link" @click.prevent="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>

<style scoped></style>
