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
      <a
        v-for="link in data.socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.name"
        :title="link.name"
      >
        <i :class="link.icon"></i>
      </a>
    </div>

    <div class="footer-bottom">
      <p>{{ $t("footer.rights") }}</p>
    </div>
  </footer>
</template>

<script setup>
defineProps(["data"])
</script>

<style scoped>
.footer {
  padding: 3rem 1.5rem;
  text-align: center;
  border-top: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}

.footer-top h3 {
  margin-bottom: 0.4rem;
  font-size: 1.55rem;
}

.footer-contact {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem 1.4rem;
  margin: 1.4rem 0;
  color: var(--text-light);
}

.footer-contact a:hover {
  color: var(--primary);
}

.social-icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.social-icons a {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
  transition: var(--transition);
}

.social-icons a:hover {
  color: #fff;
  border-color: transparent;
  background: var(--gradient);
  transform: translateY(-4px);
}

.social-icons i {
  font-size: 1.25rem;
}

.footer-bottom p {
  font-size: 0.9rem;
}
</style>
