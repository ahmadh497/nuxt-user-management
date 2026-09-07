<script setup>
definePageMeta({
  middleware: 'auth'
})

const { user } = useUserSession()
</script>

<template>
  <section class="profile-page">
    <p class="eyebrow">Account</p>

    <h1>My Profile</h1>

    <div class="profile-card">
      <div class="profile-row">
        <span>Name</span>
        <strong>{{ user?.name }}</strong>
      </div>

      <div class="profile-row">
        <span>Email</span>
        <strong>{{ user?.email }}</strong>
      </div>

      <div class="profile-row">
        <span>Role</span>
        <strong class="role-badge">
          {{ user?.role }}
        </strong>
      </div>
    </div>

    <div class="security-card">
      <h2>Authentication Demo</h2>

      <p>
        This page is protected and can only be viewed by authenticated users.
        The application uses session-based authentication and role-based access control.
      </p>

      <NuxtLink
        v-if="user?.role === 'admin'"
        to="/admin"
        class="primary-button"
      >
        Open Admin Area
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.profile-page {
  max-width: 760px;
}

.profile-page h1 {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  margin: 0 0 24px;
}

.profile-card,
.security-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 20px;
}

.profile-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 0;
  border-bottom: 1px solid #e5e7eb;
}

.profile-row:last-child {
  border-bottom: 0;
}

.profile-row span {
  color: #6b7280;
}

.role-badge {
  text-transform: capitalize;
}

.security-card h2 {
  margin-top: 0;
}

.security-card p {
  line-height: 1.7;
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  .profile-row {
    flex-direction: column;
    gap: 6px;
  }
}
</style>