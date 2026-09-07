<script setup>
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const { fetch: refreshSession } = useUserSession()

async function login() {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = 'Please enter your email and password.'
    return
  }

  try {
    loading.value = true

    await $fetch('/api/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })

    await refreshSession()
    await navigateTo('/profile')
  } catch (err) {
    error.value =
      err?.data?.statusMessage ||
      err?.data?.message ||
      'Invalid email or password.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="auth-page">
    <div class="auth-card">
      <p class="eyebrow">Welcome Back</p>

      <h1>Login</h1>

      <p class="auth-description">
        Sign in to access your protected profile and role-based features.
      </p>

      <form @submit.prevent="login">
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
          placeholder="Enter your password"
        >

        <p v-if="error" class="error">
          {{ error }}
        </p>

        <button
          type="submit"
          class="login-button"
          :disabled="loading"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>

      <p class="register-link">
        Don't have an account?

        <NuxtLink to="/register">
          Create one
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

.login-button {
  width: 100%;
  margin-top: 16px;
  background: #111827;
  color: white;
  font-weight: 700;
}

.login-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.register-link {
  margin-top: 20px;
  text-align: center;
}

.register-link a {
  font-weight: 700;
  text-decoration: underline;
}
</style>