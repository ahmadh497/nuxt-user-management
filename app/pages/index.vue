<template>
  <section class="hero">
    <div class="hero-content">
      <p class="eyebrow">Junior Software Developer</p>

      <h1>
        Hi, I'm Ahmad Hassan Haidar
      </h1>

      <p class="hero-text">
        I build full-stack web applications using Vue.js, Nuxt,
        JavaScript, TypeScript, PHP, MySQL, and REST APIs.
      </p>

      <div class="hero-actions">
        <NuxtLink to="/projects" class="primary-button">
          View Projects
        </NuxtLink>

        <NuxtLink to="/about" class="secondary-button">
          About Me
        </NuxtLink>

        <a
          href="/Ahmad-Hassan-Haidar-CV.pdf"
          class="secondary-button"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  </section>

  <section class="skills-section">
    <h2>Main Skills</h2>

    <div class="skills-grid">
      <div class="card">
        <h3>Front-End</h3>
        <p>
          Vue.js 3, Nuxt 4, JavaScript, TypeScript,
          HTML, CSS, Bootstrap
        </p>
      </div>

      <div class="card">
        <h3>Back-End</h3>
        <p>
          Nuxt Server API, PHP, REST APIs,
          CRUD, Authentication
        </p>
      </div>

      <div class="card">
        <h3>Database</h3>
        <p>
          MySQL, database integration,
          queries, and data management
        </p>
      </div>

      <div class="card">
        <h3>Mobile</h3>
        <p>
          Flutter, Dart, REST API integration, and JSON
        </p>
      </div>
    </div>
  </section>
</template>