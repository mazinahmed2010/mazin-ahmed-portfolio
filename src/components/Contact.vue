<template>
  <section id="contact" data-aos="fade-up">
    <h2>{{ $t("sections.contact") }}</h2>

    <div class="card contact-cta">
      <p>
        {{ $t("contact.intro") }}
      </p>

      <div class="buttons center">
        <a :href="'mailto:' + data.contact.email" class="btn">
          {{ $t("buttons.email") }}
        </a>
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
