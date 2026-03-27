<template>
  <section id="about" data-aos="fade-up">
    <h2>About Me</h2>
    <div class="card">
      <p>{{ data.about }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>