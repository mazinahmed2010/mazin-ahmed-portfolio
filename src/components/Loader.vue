<template>
  <transition name="fade">
    <div v-if="show" class="loader-screen" aria-hidden="true">
      <div class="loader-inner">
        <div class="loader-ring"></div>
        <div class="loader-dot"></div>
        <p class="loader-text">Loading portfolio...</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
</script>