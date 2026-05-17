<template>
  <section id="hero" class="hero container">

    <div class="hero-grid">

      <div
        class="hero-content"
        data-aos="fade-right"
      >

        <div class="badge">
          {{ $t("hero.available") }}
        </div>

        <h1>
          {{ firstName }}
          <span>{{ lastName }}</span>
        </h1>

        <h2>
          {{ data.title }}
        </h2>

        <p>
          {{ data.tagline }}
        </p>

        <div class="hero-buttons">

          <a
            :href="data.cv"
            download
            class="btn"
          >
            {{ $t("buttons.cv") }}
          </a>

          <a
            href="#projects"
            class="btn outline"
          >
            {{ $t("buttons.projects") }}
          </a>

        </div>

      </div>

      <div
        class="hero-image-wrapper"
        data-aos="zoom-in"
      >

        <div class="hero-ring"></div>

        <img
          :src="data.image"
          :alt="data.name"
          class="hero-image"
        />

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const nameParts = computed(() => props.data.name.split(" "))
const firstName = computed(() => nameParts.value.slice(0, 2).join(" "))
const lastName = computed(() => nameParts.value.slice(2).join(" "))
</script>

<style scoped>
.hero {
  min-height: 100vh;

  display: flex;
  align-items: center;
  padding-top: 110px;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 4rem;
  align-items: center;
}

.badge {
  display: inline-flex;

  padding: 0.7rem 1.2rem;

  border-radius: 999px;

  background: rgba(255, 193, 7, 0.12);

  border: 1px solid rgba(255, 193, 7, 0.2);

  color: var(--accent);

  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: clamp(3rem, 8vw, 5rem);

  line-height: 1.05;

  margin-bottom: 1rem;

  font-weight: 900;
  color: var(--text);
}

.hero h1 span {
  color: var(--accent);
}

.hero h2 {
  font-size: 1.5rem;

  color: var(--accent);

  margin-bottom: 1.5rem;
}

.hero p {
  max-width: 650px;

  margin-bottom: 2rem;

  line-height: 1.9;
  color: var(--text-light);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-buttons .btn {
  min-width: 180px;
}

.hero-image-wrapper {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: min(500px, 100%);
  aspect-ratio: 1;
  margin-inline: auto;
}

.hero-ring {
  position: absolute;

  inset: -14px;

  border-radius: 50%;

  border: 3px solid var(--accent);

  filter: blur(2px);

  animation: pulse 4s infinite;
}

.hero-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;

  border-radius: 50%;
  object-fit: cover;
  object-position: center top;

  position: relative;

  z-index: 2;

  border: 8px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.04);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}

@media (max-width: 992px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-image-wrapper {
    width: 100%;
    max-width: 420px;
  }
}
</style>
