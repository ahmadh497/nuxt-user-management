<script setup>
defineProps({
  users: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['delete-user', 'update-user'])
</script>

<template>
  <ul>
    <UserItem
      v-for="user in users"
      :key="user.id"
      :user="user"
      @delete-user="emit('delete-user', $event)"
      @update-user="emit('update-user', $event)"
    />
  </ul>
</template>