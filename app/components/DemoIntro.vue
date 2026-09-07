<template>
  <section class="demo-intro">
    <p class="eyebrow">Full-Stack Demo</p>

    <h1>User Management Application</h1>

    <p class="description">
      This project demonstrates a full-stack CRUD application built with
      Vue.js, Nuxt, MySQL, REST APIs, authentication, protected routes,
      and role-based access control.
    </p>

    <div class="feature-list">
      <span>✓ Create users</span>
      <span>✓ View users</span>
      <span>✓ Update users</span>
      <span>✓ Delete users</span>
      <span>✓ Search & filter</span>
      <span>✓ Form validation</span>
    </div>
  </section>
</template>

<style scoped>
.demo-intro {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 28px;
  margin-bottom: 28px;
}

.eyebrow {
  font-weight: 700;
  margin: 0 0 10px;
}

.demo-intro h1 {
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