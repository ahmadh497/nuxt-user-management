<template>
  <section class="admin-intro">
    <p class="eyebrow">Admin Area</p>

    <h1>Role-Based Access Control</h1>

    <p class="description">
      This protected page is available only to users with the admin role.
      It demonstrates authentication, protected routes, and role-based access control.
    </p>

    <div class="feature-list">
      <span>✓ Admin-only access</span>
      <span>✓ Protected route</span>
      <span>✓ Session authentication</span>
      <span>✓ Role verification</span>
    </div>
  </section>
</template>

<style scoped>
.admin-intro {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 28px;
  margin-bottom: 28px;
}

.admin-intro h1 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 5vw, 3rem);
}

.description {
  max-width: 760px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.feature-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.feature-list span {
  border: 1px solid #d1d5db;
  border-radius: 999px;
  padding: 8px 12px;
  background: #f9fafb;
}
</style>