<template>
  <section id="projects" data-aos="fade-up">
    <h2>{{ $t("sections.projects") }}</h2>

    <div class="filters">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat === allCategory ? $t("buttons.all") : cat }}
      </button>
    </div>

    <div class="grid cards-grid">
      <div class="project-card" v-for="(p, index) in filteredProjects" :key="index">
        <img :src="p.image" :alt="p.name" class="project-image" />
        <div class="project-content">
          <h3>{{ p.name }}</h3>
          <span class="project-badge">{{ p.category }}</span>
          <p>{{ p.desc }}</p>

          <div class="buttons">
            <a :href="p.live" target="_blank" class="btn">
              {{ $t("buttons.live") }}
            </a>
            <a :href="p.github" target="_blank" class="btn outline">
              {{ $t("buttons.github") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps(['data'])

const allCategory = 'All'
const selectedCategory = ref(allCategory)

const categories = computed(() => {
  return [allCategory, ...new Set(props.data.projects.map(p => p.category))]
})

const filteredProjects = computed(() => {
  if (selectedCategory.value === allCategory) return props.data.projects
  return props.data.projects.filter(p => p.category === selectedCategory.value)
})
</script>
