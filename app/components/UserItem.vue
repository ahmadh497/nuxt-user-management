<script setup>
import { ref } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['delete-user', 'update-user'])

const isEditing = ref(false)
const editName = ref(props.user.name)
const editEmail = ref(props.user.email)

const nameError = ref('')
const emailError = ref('')

function startEdit() {
  editName.value = props.user.name
  editEmail.value = props.user.email
  nameError.value = ''
  emailError.value = ''
  isEditing.value = true
}

function cancelEdit() {
  isEditing.value = false
  nameError.value = ''
  emailError.value = ''
}

function validateEdit() {
  nameError.value = ''
  emailError.value = ''

  if (!editName.value.trim()) {
    nameError.value = 'Name is required'
  }

  if (!editEmail.value.trim()) {
    emailError.value = 'Email is required'
  } else if (!editEmail.value.includes('@')) {
    emailError.value = 'Please enter a valid email'
  }

  return !nameError.value && !emailError.value
}

function saveEdit() {
  if (!validateEdit()) {
    return
  }

  emit('update-user', {
    id: props.user.id,
    name: editName.value.trim(),
    email: editEmail.value.trim()
  })

  isEditing.value = false
}
</script>

<template>
  <li>
    <template v-if="!isEditing">
      {{ user.name }} - {{ user.email }}

      <button @click="startEdit">
        Edit
      </button>

      <button @click="emit('delete-user', user.id)">
        Delete
      </button>
    </template>

    <template v-else>
      <input
        v-model="editName"
        type="text"
        placeholder="Name"
      />
      <p v-if="nameError">{{ nameError }}</p>

      <input
        v-model="editEmail"
        type="email"
        placeholder="Email"
      />
      <p v-if="emailError">{{ emailError }}</p>

      <button @click="saveEdit">
        Save
      </button>

      <button @click="cancelEdit">
        Cancel
      </button>
    </template>
  </li>
</template>