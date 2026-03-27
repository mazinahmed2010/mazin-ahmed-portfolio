<template>
  <section id="hero" class="hero">
    <div class="image-wrapper">
      <img src="/profile.jpg" alt="Mazin Ahmed" class="profile" />
      <div class="glow"></div>
    </div>

    <div class="hero-text">
      <p class="hero-badge">Available for Opportunities</p>
      <h1>{{ data.name }}</h1>
      <p class="title">{{ data.title }}</p>
      <p class="tagline">{{ data.tagline }}</p>

      <div class="buttons">
        <a :href="'mailto:' + data.contact.email" class="btn">Contact Me</a>
        <a href="/Mazin_CV.pdf" download class="btn outline">Download CV</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

defineProps(['data'])

onMounted(() => {
  gsap.from(".image-wrapper", {
    scale: 0.85,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out"
  })

  gsap.from(".hero-text", {
    x: 60,
    opacity: 0,
    duration: 1,
    delay: 0.25,
    ease: "power3.out"
  })

  gsap.from(".hero-badge", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    delay: 0.5
  })
})
</script>