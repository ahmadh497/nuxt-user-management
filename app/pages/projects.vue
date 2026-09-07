<template>
  <section>
    <p class="eyebrow">My Work</p>
    <h1>Selected Projects</h1>

    <div class="skills-grid">
      <article class="card project-card">
        <h2>Full-Stack Vue & Nuxt User Management Application</h2>

        <div class="tech-list">
          <span>Vue.js 3</span>
          <span>Nuxt 4</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Pinia</span>
          <span>MySQL</span>
          <span>REST API</span>
        </div>

        <p>
          Built a full-stack user management application with CRUD operations,
          reusable components, dynamic routing, authentication, protected routes,
          role-based access control, search, filtering, validation, and error handling.
        </p>

        <div class="project-actions">
          <NuxtLink to="/users" class="primary-button">
            Open Demo
          </NuxtLink>

          <a
            href="https://github.com/ahmadh497/nuxt-user-management"
            target="_blank"
            rel="noopener noreferrer"
            class="secondary-button"
          >
            GitHub Repository
          </a>
        </div>
      </article>

      <article class="card project-card">
        <h2>Mobile Application</h2>

        <div class="tech-list">
          <span>Dart</span>
          <span>Flutter</span>
          <span>REST API</span>
          <span>JSON</span>
          <span>PHP</span>
        </div>

        <p>
          Developed a mobile application using Flutter and Dart with REST API
          integration, JSON data handling, PHP backend functionality, testing,
          and debugging.
        </p>
      </article>

      <article class="card project-card">
        <h2>Web Development Project II</h2>

        <div class="tech-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>Bootstrap</span>
        </div>

        <p>
          Developed a full-stack web project with responsive pages, PHP backend
          functionality, and MySQL database integration.
        </p>
      </article>

      <article class="card project-card">
        <h2>Senior Project – 2D Application</h2>

        <div class="tech-list">
          <span>C#</span>
          <span>Unity</span>
          <span>Unity 2D</span>
        </div>

        <p>
          Developed a 2D application in Unity with interactive functionality,
          testing, and debugging.
        </p>
      </article>

      <article class="card project-card">
        <h2>Web Development Project I</h2>

        <div class="tech-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <p>
          Built a responsive website with interactive front-end functionality
          and debugging practices.
        </p>
      </article>

      <article class="card project-card">
        <h2>Artificial Intelligence Project</h2>

        <p>
          Completed an academic project applying introductory artificial
          intelligence concepts and problem-solving techniques.
        </p>
      </article>

      <article class="card project-card">
        <h2>Robotics Project</h2>

        <p>
          Participated in a university robotics project involving technical
          problem-solving, implementation, and team collaboration.
        </p>
      </article>
    </div>
  </section>
</template>