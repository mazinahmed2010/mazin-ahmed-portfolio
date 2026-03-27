<template>
  <section id="education" data-aos="fade-up">
    <h2>Education</h2>

    <div class="grid cards-grid">
      <div class="edu-card" v-for="(edu, index) in data.education" :key="index">
        <img :src="edu.logo" :alt="edu.title" class="edu-logo" />
        <h3>{{ edu.title }}</h3>
        <p>{{ edu.place }}</p>
        <span>{{ edu.date }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>