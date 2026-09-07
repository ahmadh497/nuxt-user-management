<script setup>
import { ref } from 'vue'

const emit = defineEmits(['user-added'])

const name = ref('')
const email = ref('')
const message = ref('')
const error = ref('')

const nameError = ref('')
const emailError = ref('')

function validateForm() {
  nameError.value = ''
  emailError.value = ''

  if (!name.value.trim()) {
    nameError.value = 'Name is required'
  }

  if (!email.value.trim()) {
    emailError.value = 'Email is required'
  } else if (!email.value.includes('@')) {
    emailError.value = 'Please enter a valid email'
  }

  return !nameError.value && !emailError.value
}

async function addUser() {
  message.value = ''
  error.value = ''

  if (!validateForm()) {
    return
  }

  try {
    const result = await $fetch('/api/users', {
      method: 'POST',
      body: {
        name: name.value.trim(),
        email: email.value.trim()
      }
    })

    message.value = result.message

    name.value = ''
    email.value = ''

    emit('user-added')
  } catch (err) {
    error.value = err.data?.statusMessage || 'Failed to create user'
  }
}
</script>

<template>
  <section>
    <h2>Add User</h2>

    <input
      v-model="name"
      type="text"
      placeholder="Enter name"
    />
    <p v-if="nameError">{{ nameError }}</p>

    <input
      v-model="email"
      type="email"
      placeholder="Enter email"
    />
    <p v-if="emailError">{{ emailError }}</p>

    <button @click="addUser">
      Add User
    </button>

    <p v-if="message">{{ message }}</p>
    <p v-if="error">{{ error }}</p>
  </section>
</template>