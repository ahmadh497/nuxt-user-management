<script setup>
const route = useRoute()

const { data: user, pending, error } = await useFetch(
  `/api/users/${route.params.id}`
)
</script>

<template>
  <div>
    <h1>User Details</h1>

    <p v-if="pending">Loading user...</p>

    <p v-else-if="error">
      Failed to load user.
    </p>

    <div v-else-if="user">
      <p>ID: {{ user.id }}</p>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>