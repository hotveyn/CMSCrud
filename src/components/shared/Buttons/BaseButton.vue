<template>
  <button class="button" :class="buttonType">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  type?: 'first' | 'secondary'
}>(), {type: 'first'})

const buttonType = computed(() => {
  return props.type
});
</script>

<style scoped lang="scss">
button {
  border-radius: 6px;
  border: none;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;

}

.first {
  background-color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  color: #25213B;
  outline: 2px solid #C6C2DE;

}

.secondary {
  background: #6D5BD0;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  padding: 10px 15px;
  font-weight: 600;
}

</style>