<template>
  <Loader :show="isLoading" />


<Navbar
  :activeSection="activeSection"
  :isDark="isDark"
  @toggle-theme="toggleTheme"
/>

  <div class="container">
    <Hero :data="data" />
    <About :data="data" />
    <Skills :data="data" />
    <Projects :data="data" />
    <Experience :data="data" />
    <Education :data="data" />
    <Courses :data="data" />
    <Contact :data="data" />
    <Footer :data="data" />
  </div>

  <BackToTop :visible="showBackToTop" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import data from './data/data'

import Loader from './components/Loader.vue'
import BackToTop from './components/BackToTop.vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Courses from './components/Courses.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const isLoading = ref(true)
const isDark = ref(true)
const scrollProgress = ref(0)
const activeSection = ref('hero')
const showBackToTop = ref(false)

function updateTheme() {
  document.body.classList.toggle("light", !isDark.value)
}

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem("theme", isDark.value ? "dark" : "light")
  updateTheme()
}

function updateScrollProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

function updateActiveSection() {
  const sections = document.querySelectorAll('section[id]')
  let current = 'hero'

  sections.forEach(section => {
    const top = section.offsetTop - 120
    const height = section.offsetHeight

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.id
    }
  })

  activeSection.value = current
}

function updateBackToTop() {
  showBackToTop.value = window.scrollY > 500
}

onMounted(() => {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme) {
    isDark.value = savedTheme === "dark"
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
  }

  updateTheme()
  updateScrollProgress()
  updateActiveSection()
  updateBackToTop()

  window.addEventListener('scroll', updateScrollProgress)
  window.addEventListener('scroll', updateActiveSection)
  window.addEventListener('scroll', updateBackToTop)

  setTimeout(() => {
    isLoading.value = false
  }, 1200)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollProgress)
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('scroll', updateBackToTop)
})
</script>