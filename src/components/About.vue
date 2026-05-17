<template>
  <section id="about" data-aos="fade-up">
    <h2>{{ $t("sections.about") }}</h2>
    <div class="card">
      <p>{{ data.about }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>
