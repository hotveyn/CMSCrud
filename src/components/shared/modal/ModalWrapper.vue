<template>
            <div @click.self="$emit('hideModal')" class="modal-wrapper">
                <slot/>
            </div>
</template>

<script setup lang="ts">
import OpacityTransition from "@/components/shared/transitions/OpacityTransition.vue";

const emit = defineEmits(['hideModal']);

</script>

<style scoped lang="scss">
.modal-wrapper {
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(18px);
  position: fixed;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
}
</style>