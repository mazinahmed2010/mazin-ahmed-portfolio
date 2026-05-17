<template>
  <section id="skills" data-aos="fade-up">
    <h2>{{ $t("sections.skills") }}</h2>

    <div class="grid cards-grid">
      <div class="card skill-card" v-for="(skill, index) in data.skills" :key="index">
        <div class="skill-heading">
          <span class="skill-icon">
            <i :class="skill.icon"></i>
          </span>
          <h3>{{ skill.title }}</h3>
        </div>

        <div class="skill-tags">
          <span v-for="item in skill.items" :key="item" class="tag">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>

<style scoped>
#skills {
  max-width: 1280px;
  margin: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

#skills h2 {
  margin-bottom: 2rem;
}

.cards-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.skill-card {
  padding: 1.6rem;
}

.skill-heading {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.skill-icon {
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  color: #fff;
  background: var(--gradient);
  box-shadow: 0 12px 28px rgba(110, 168, 254, 0.24);
}

.skill-icon i {
  font-size: 1.45rem;
}

.skill-heading h3 {
  font-size: 1.08rem;
  line-height: 1.35;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}
</style>
