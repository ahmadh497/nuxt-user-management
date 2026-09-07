<script setup>
const { loggedIn, user, clear } = useUserSession()

async function logout() {
  await clear()
  await navigateTo('/login')
}
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="container navbar">
        <NuxtLink to="/" class="brand">
          Ahmad Dev
        </NuxtLink>

        <nav class="nav-links">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/users">Demo</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
          <NuxtLink to="/profile">Profile</NuxtLink>

          <NuxtLink
            v-if="user?.role === 'admin'"
            to="/admin"
          >
            Admin
          </NuxtLink>

          <NuxtLink
            v-if="!loggedIn"
            to="/login"
          >
            Login
          </NuxtLink>

          <button
            v-else
            class="logout-button"
            @click="logout"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>

    <main class="container page main-content">
      <slot />
    </main>

    <footer class="site-footer">
      <div class="container footer-content">
        <p>
          © 2026 Ahmad Hassan Haidar
        </p>

        <p>
          Junior Software Developer
        </p>
      </div>
    </footer>
  </div>
</template>