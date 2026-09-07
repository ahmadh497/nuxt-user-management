<script setup>
const { data: users, pending, error } = await useFetch(
  'https://jsonplaceholder.typicode.com/users'
)
</script>

<template>
  <div>
    <h1>Users From API</h1>

    <p v-if="pending">Loading users...</p>

    <p v-else-if="error">
      Failed to load users.
    </p>

    <ul v-else>
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="`/users/${user.id}`">
          {{ user.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>