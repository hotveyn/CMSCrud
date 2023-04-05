<template>
  <div class="container">
    <TheHeader/>
    <slot/>
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style scoped lang="scss">
.container {
  max-width: 1110px;
  margin: 0 auto;
  padding: 20px 5px;
  align-items: center;
}
</style>