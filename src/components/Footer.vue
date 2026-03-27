<template>
  <footer class="footer">
    <div class="footer-top">
      <h3>{{ data.name }}</h3>
      <p>{{ data.title }}</p>
    </div>

    <div class="footer-contact">
      <a :href="'mailto:' + data.contact.email">{{ data.contact.email }}</a>
      <a :href="'tel:' + data.contact.phone">{{ data.contact.phone }}</a>
    </div>

    <div class="social-icons">
      <a :href="data.social.facebook" target="_blank" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
      </a>

      <a :href="data.social.x" target="_blank" aria-label="X">
        <i class="fa-brands fa-x-twitter"></i>
      </a>

      <a :href="data.social.whatsapp" target="_blank" aria-label="WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>

      <a :href="data.social.linkedin" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
      </a>

      <a :href="data.social.instagram" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>

      <a :href="data.social.tiktok" target="_blank" aria-label="TikTok">
        <i class="fab fa-tiktok"></i>
      </a>

      <a :href="data.contact.github" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Mazin Ahmed. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
defineProps(['data'])
</script>