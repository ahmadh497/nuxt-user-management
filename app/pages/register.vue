<script setup>
const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)

async function register() {
  error.value = ''
  success.value = ''

  if (!name.value || !email.value || !password.value) {
    error.value = 'Please complete all fields.'
    return
  }

  if (!email.value.includes('@')) {
    error.value = 'Please enter a valid email address.'
    return
  }

  if (password.value.length < 6) {
    error.value = 'Password must be at least 6 characters.'
    return
  }

  try {
    loading.value = true

    await $fetch('/api/register', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value
      }
    })

    success.value = 'Account created successfully. You can now log in.'

    name.value = ''
    email.value = ''
    password.value = ''
  } catch (err) {
    error.value =
      err?.data?.statusMessage ||
      err?.data?.message ||
      'Registration failed.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="auth-page">
    <div class="auth-card">
      <p class="eyebrow">Create Account</p>

      <h1>Register</h1>

      <p class="auth-description">
        Create an account to test the authentication and protected profile features.
      </p>

      <form @submit.prevent="register">
        <label for="name">Name</label>

        <input
          id="name"
          v-model="name"
          type="text"
          placeholder="Enter your name"
        >

        <label for="email">Email</label>

        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
        >

        <label for="password">Password</label>

        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Minimum 6 characters"
        >

        <p v-if="error" class="error">
          {{ error }}
        </p>

        <p v-if="success" class="success">
          {{ success }}
        </p>

        <button
          type="submit"
          class="register-button"
          :disabled="loading"
        >
          {{ loading ? 'Creating Account...' : 'Create Account' }}
        </button>
      </form>

      <p class="login-link">
        Already have an account?

        <NuxtLink to="/login">
          Login
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

<style scoped>
.auth-page {
  min-height: 65vh;
  display: grid;
  place-items: center;
}

.auth-card {
  width: 100%;
  max-width: 460px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 30px;
}

.auth-card h1 {
  margin: 0 0 10px;
  font-size: 2.3rem;
}

.auth-description {
  line-height: 1.6;
  margin-bottom: 22px;
}

label {
  display: block;
  font-weight: 700;
  margin-top: 12px;
}

.register-button {
  width: 100%;
  margin-top: 16px;
  background: #111827;
  color: white;
  font-weight: 700;
}

.register-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-link {
  margin-top: 20px;
  text-align: center;
}

.login-link a {
  font-weight: 700;
  text-decoration: underline;
}
</style>