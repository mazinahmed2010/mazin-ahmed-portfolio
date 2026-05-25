<template>
  <section id="education" data-aos="fade-up">
    <h2>{{ $t("sections.education") }}</h2>

    <div class="grid cards-grid">
      <div class="edu-card" v-for="(edu, index) in data.education" :key="index">
        <div class="edu-logo-frame">
          <img
            v-if="edu.logo"
            :src="edu.logo"
            :alt="edu.title"
            class="edu-logo"
          />
          <span v-else class="edu-logo-fallback">
            {{ getInitials(edu.place) }}
          </span>
        </div>

        <div class="edu-content">
          <h3>{{ edu.title }}</h3>
          <p>{{ edu.place }}</p>
          <span>{{ edu.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])

function getInitials(place) {
  return place
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}
</script>

<style scoped>
#education {
  max-width: 1280px;
  margin: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

#education h2 {
  margin-bottom: 2rem;
}

.cards-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.edu-card {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 1.2rem;
  align-items: center;
  min-height: 180px;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.edu-card:hover {
  transform: translateY(-8px);
}

.edu-logo-frame {
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem;
  border-radius: 20px;
  background: rgba(110, 168, 254, 0.1);
  border: 1px solid var(--strong-border);
}

.edu-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.edu-logo-fallback {
  color: var(--primary);
  font-size: 1.4rem;
  font-weight: 900;
}

.edu-content h3 {
  margin-bottom: 0.45rem;
  line-height: 1.35;
}

.edu-content p {
  margin-bottom: 0.45rem;
}

.edu-content span {
  color: var(--primary);
  font-weight: 700;
}

@media (max-width: 576px) {
  .edu-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .edu-logo-frame {
    margin: auto;
  }
}
</style>
