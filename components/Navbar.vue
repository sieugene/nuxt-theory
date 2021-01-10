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
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
