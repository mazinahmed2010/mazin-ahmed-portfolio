<template>
  <section id="skills" data-aos="fade-up">
    <h2>Skills</h2>

    <div class="grid cards-grid">
      <div class="card" v-for="(skill, index) in data.skills" :key="index">
        <h3>{{ skill.title }}</h3>
        <p>{{ skill.items }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>