<template>
  <section id="courses" data-aos="fade-up">
    <h2>{{ $t("sections.courses") }}</h2>

    <div class="card">
      <ul class="course-list">
        <li v-for="(course, index) in data.courses" :key="index">
          {{ course }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>
