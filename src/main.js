import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App)
app.mount('#app')

AOS.init({
  duration: 1000,
  once: true
})