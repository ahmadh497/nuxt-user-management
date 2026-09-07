<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'admin'
})
</script>

<template>
  <div>
    <AdminIntro />

    <div class="card">
      <h2>Admin Dashboard</h2>
      <p>Welcome to the admin-only page.</p>
    </div>
  </div>
</template>