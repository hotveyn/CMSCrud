<template>
    <label
          class="label-text"
          for="input"
          v-if="labelText"
    >
        {{ labelText }}
    </label>
    <span
          :class="{'label-mode': labelText}"
          class="input-wrapper"
    >
      <SearchIcon v-if="isSearch"/>
      <input
            @change="emits('changeInput', $event.target.value)"
            class="input"
            :type="type"
            :placeholder="placeholder"
            id="input"
      >
  </span>
</template>

<script
    setup
    lang="ts"
>
import SearchIcon from '@/components/shared/icons/SearchIcon.vue'
import {ref} from "vue";

const props = withDefaults(defineProps<{
    labelText?: string,
    type?: 'text'|'number'
    placeholder?: string,
    isSearch?: boolean
}>(), {labelText: '', placeholder: '', isSearch: false,type: 'text'});

const emits = defineEmits<{
    (e: 'changeInput', val: string): void;
}>();

</script>

<style
    scoped
    lang="scss"
>
.input-wrapper {
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  background-color: #F4F2FF;
  outline: 2px solid #F4F2FF;
  color: #6E6893;
  max-width: 392px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  border-radius: 6px;

  .input {
    border: 0;
    background-color: rgba(110, 104, 147, 0);
    width: 100%;

    &:active, &:focus {
      border: none;
      outline: none;
    }
  }
}

.label-text {
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #6E6893;
  margin-left: 10px;
}

.label-mode {
  margin-top: 5px;
}
</style>