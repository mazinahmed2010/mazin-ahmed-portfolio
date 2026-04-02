<template>
  <header :class="['navbar', { scrolled: isScrolled }]" data-aos="fade-down">
    <div class="navbar-inner">
      <!-- Logo -->
      <div class="logo">Mazin Ahmed</div>

      <!-- Desktop Menu -->
      <nav class="desktop-nav">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="'#' + item.id"
          :class="{ active: activeSection === item.id }"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Actions -->
      <div class="nav-actions">
        <button class="theme-toggle-nav" @click="$emit('toggle-theme')">
          {{ isDark ? "🌙" : "☀️" }}
        </button>

        <a href="/Mazin_CV.pdf" download class="btn small outline">Download CV</a>

        <!-- Mobile Button -->
        <div class="menu-toggle" @click="toggleMenu">
          <span :class="{ open: isMenuOpen }"></span>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade-up">
      <div v-if="isMenuOpen" class="mobile-menu">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="'#' + item.id"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>

        <button class="theme-toggle-mobile" @click="$emit('toggle-theme')">
          {{ isDark ? "🌙 Switch Theme" : "☀️ Switch Theme" }}
        </button>

        <a href="/Mazin_CV.pdf" download class="btn outline full">Download CV</a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

defineProps(["activeSection", "isDark"])
defineEmits(["toggle-theme"])

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "courses", label: "Courses" },
  { id: "contact", label: "Contact" }
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>