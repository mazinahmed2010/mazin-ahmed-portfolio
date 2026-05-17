<template>
  <div>

    <Navbar
    />

    <Hero :data="portfolioData" />
    <About :data="portfolioData" />
    <Skills :data="portfolioData" />
    <Projects :data="portfolioData" />
    <Experience :data="portfolioData" />
    <Education :data="portfolioData" />
    <Contact :data="portfolioData" />
    <Footer :data="portfolioData" />
    <BackToTop />

  </div>
</template>

<script setup>
import { computed } from "vue"
import { useI18n } from "vue-i18n"

import Navbar from "./components/Navbar.vue"
import Hero from "./components/Hero.vue"
import About from "./components/About.vue"
import Skills from "./components/Skills.vue"
import Projects from "./components/Projects.vue"
import Experience from "./components/Experience.vue"
import Education from "./components/Education.vue"
import Contact from "./components/Contact.vue"
import Footer from "./components/Footer.vue"
import BackToTop from "./components/BackToTop.vue"
import {
  about,
  education,
  experience,
  languages,
  personal,
  projects,
  skills,
  socialLinks
} from "./data/data.js"

const { locale } = useI18n()

const social = computed(() => {
  return socialLinks.reduce((links, item) => {
    links[item.name.toLowerCase()] = item.url
    return links
  }, {})
})

const portfolioData = computed(() => {
  const currentLocale = locale.value

  return {
    name: personal.name,
    title: personal.title[currentLocale],
    tagline: personal.tagline[currentLocale],
    image: personal.image,
    cv: personal.cv,
    about: about[currentLocale].trim(),
    skills: skills.map((skill) => ({
      icon: skill.icon,
      title: skill.category[currentLocale],
      items: skill.items
    })),
    projects: projects.map((project) => ({
      name: project.title,
      image: project.image,
      category: project.tech[0],
      desc: project.description[currentLocale],
      live: project.live,
      github: project.github
    })),
    experience: experience.map((item) => ({
      role: item.role[currentLocale],
      date: item.period,
      desc: item.details[currentLocale]
    })),
    education: education.map((item) => ({
      logo: item.logo,
      title: item.degree[currentLocale],
      place:
        typeof item.school === "string"
          ? item.school
          : item.school[currentLocale],
      date: item.period
    })),
    courses: languages.map((item) => item[currentLocale]),
    contact: {
      email: personal.email,
      phone: personal.phone,
      github: social.value.github,
      linkedin: social.value.linkedin
    },
    socialLinks
  }
})

</script>
