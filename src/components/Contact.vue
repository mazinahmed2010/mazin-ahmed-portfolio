<template>
  <section id="contact" data-aos="fade-up">
    <h2>Let's Work Together</h2>

    <div class="card contact-cta">
      <p>
        I'm open to internships, junior developer roles, freelance opportunities,
        and collaborative tech projects.
      </p>

      <div class="buttons center">
        <a :href="'mailto:' + data.contact.email" class="btn">Send Email</a>
        <a :href="data.contact.linkedin" target="_blank" class="btn outline">
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>