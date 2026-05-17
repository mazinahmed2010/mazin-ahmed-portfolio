import { createApp } from "vue"
import App from "./App.vue"

import AOS from "aos"
import "aos/dist/aos.css"

import "remixicon/fonts/remixicon.css"

import i18n from "./i18n"

import "./assets/styles.css"

AOS.init({
  duration: 1000,
  once: true
})

createApp(App)
  .use(i18n)
  .mount("#app")