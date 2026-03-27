<template>
  <section id="experience" data-aos="fade-up">
    <h2>Experience</h2>

    <div class="timeline">
      <div class="timeline-item" v-for="(exp, index) in data.experience" :key="index">
        <div class="dot"></div>
        <div class="content">
          <h3>{{ exp.role }}</h3>
          <span>{{ exp.date }}</span>
          <p>{{ exp.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>