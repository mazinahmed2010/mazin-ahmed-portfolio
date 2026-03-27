<template>
  <transition name="fade-up">
    <button
      v-if="visible"
      class="back-to-top"
      @click="scrollTop"
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  </transition>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>