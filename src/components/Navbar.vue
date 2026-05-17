<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="navbar-inner">

      <!-- LOGO -->
      <a href="#hero" class="logo">
        <span class="logo-text">Mazin Ahmed</span>
      </a>

      <!-- DESKTOP NAV -->
      <nav class="desktop-nav">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="'#' + item.id"
          :class="{ active: activeSection === item.id }"
        >
          {{ $t(item.label) }}
        </a>
      </nav>

      <!-- ACTIONS -->
      <div class="nav-actions">

        <!-- LANGUAGE -->
        <button class="lang-btn" @click="toggleLanguage">
          <span>{{ locale === "en" ? "AR" : "EN" }}</span>
        </button>

        <!-- CV -->
        <a
          href="/Mazin_CV.pdf"
          download
          class="btn small outline"
        >
          {{ $t("buttons.cv") }}
        </a>

        <!-- MOBILE TOGGLE -->
        <button class="menu-toggle" @click="toggleMenu">
          <span :class="{ open: isMenuOpen }"></span>
        </button>

      </div>
    </div>

    <!-- MOBILE MENU -->
    <transition name="mobile-menu">
      <div v-if="isMenuOpen" class="mobile-menu">

        <a
          v-for="item in navItems"
          :key="item.id"
          :href="'#' + item.id"
          @click="closeMenu"
        >
          {{ $t(item.label) }}
        </a>

        <!-- MOBILE ACTIONS -->
        <div class="mobile-actions">

          <button
            class="lang-btn mobile-lang"
            @click="toggleLanguage"
          >
            <span>{{ locale === "en" ? "AR" : "EN" }}</span>
          </button>

          <a
            href="/Mazin_CV.pdf"
            download
            class="btn outline full"
          >
            {{ $t("buttons.cv") }}
          </a>

        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { useI18n } from "vue-i18n"

defineProps({
  activeSection: String
})

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const { locale } = useI18n()

const navItems = [
  {
    id: "hero",
    label: "nav.home"
  },
  {
    id: "about",
    label: "nav.about"
  },
  {
    id: "skills",
    label: "nav.skills"
  },
  {
    id: "projects",
    label: "nav.projects"
  },
  {
    id: "experience",
    label: "nav.experience"
  },
  {
    id: "education",
    label: "nav.education"
  },
  {
    id: "contact",
    label: "nav.contact"
  }
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 30
}

function toggleLanguage() {
  locale.value = locale.value === "en" ? "ar" : "en"

  document.documentElement.lang = locale.value
  document.documentElement.dir =
    locale.value === "ar"
      ? "rtl"
      : "ltr"
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)

  document.documentElement.lang = locale.value
  document.documentElement.dir =
    locale.value === "ar"
      ? "rtl"
      : "ltr"
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
/* =========================
   NAVBAR
========================= */

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  backdrop-filter: blur(18px);
  background: rgba(11, 15, 25, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: 0.35s ease;
}

.scrolled {
  background: rgba(11, 15, 25, 0.96);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.navbar-inner {
  max-width: 1350px;
  margin: auto;
  height: 82px;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* =========================
   LOGO
========================= */

.logo {
  text-decoration: none;
}

.logo-text {
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: 0.5px;

  background: linear-gradient(
    90deg,
    #ffffff,
    #cfcfcf
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* =========================
   DESKTOP NAV
========================= */

.desktop-nav {
  display: flex;
  gap: clamp(1rem, 1.8vw, 2rem);
  min-width: 0;
}

.desktop-nav a {
  color: var(--text);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  transition: 0.3s ease;
}

.desktop-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 0%;
  height: 2px;
  background: var(--primary);
  transition: 0.3s ease;
}

.desktop-nav a:hover::after,
.desktop-nav a.active::after {
  width: 100%;
}

.desktop-nav a:hover,
.desktop-nav a.active {
  color: var(--primary);
}

/* =========================
   ACTIONS
========================= */

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  flex-shrink: 0;
}

/* =========================
   BUTTONS
========================= */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.3rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
}

.btn.outline {
  border: 1px solid var(--border);
  color: var(--text);
}

.btn.outline:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.btn.small {
  padding: 0.7rem 1.1rem;
  font-size: 0.9rem;
}

.btn.full {
  width: 100%;
  text-align: center;
}

/* =========================
   THEME BUTTON
========================= */

.lang-btn,
.mobile-lang {
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);

  width: 44px;
  height: 44px;

  border-radius: 50%;
  cursor: pointer;

  transition: 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.95rem;
  font-weight: 700;
}

.lang-btn span {
  color: currentColor;
  line-height: 1;
}

.lang-btn:hover,
.mobile-lang:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

/* =========================
   MENU TOGGLE
========================= */

.menu-toggle {
  display: none;

  width: 46px;
  height: 46px;

  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--card);

  cursor: pointer;

  align-items: center;
  justify-content: center;

  transition: 0.3s ease;
}

.menu-toggle:hover {
  border-color: var(--primary);
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  content: "";
  display: block;

  width: 18px;
  height: 2px;

  background: var(--text);

  position: relative;
  transition: 0.3s ease;
}

.menu-toggle span::before {
  position: absolute;
  top: -6px;
}

.menu-toggle span::after {
  position: absolute;
  top: 6px;
}

.menu-toggle span.open {
  background: transparent;
}

.menu-toggle span.open::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-toggle span.open::after {
  transform: rotate(-45deg);
  top: 0;
}

/* =========================
   MOBILE MENU
========================= */

.mobile-menu {
  display: none;
}

/* =========================
   TRANSITIONS
========================= */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1180px) {
  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1.5rem;

    background: rgba(11, 15, 25, 0.98);
    backdrop-filter: blur(18px);

    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .mobile-menu a {
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
  }

  .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .mobile-lang {
    width: 100%;
    border-radius: 999px;
    height: 50px;
  }

  .navbar-inner {
    padding: 0 1rem;
  }
}

@media (max-width: 576px) {
  .logo-text {
    font-size: 1.1rem;
  }

  .btn.small {
    display: none;
  }

  .nav-actions {
    gap: 0.5rem;
  }
}
</style>
