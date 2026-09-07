<script setup>
const { user, clear } = useUserSession()

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
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/users">Demo</NuxtLink>
          <NuxtLink to="/profile">Profile</NuxtLink>
          <NuxtLink to="/admin">Admin</NuxtLink>

          <span class="admin-user">
            {{ user?.name }}
          </span>

          <button
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
        <p>© 2026 Ahmad Hassan Haidar</p>
        <p>Admin Area</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.admin-user {
  font-weight: 700;
}
</style>