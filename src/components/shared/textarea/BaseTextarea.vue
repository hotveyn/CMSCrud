<template>
    <label class="label-text" for="input" v-if="labelText">
        {{ labelText }}
    </label>
    <textarea :class="{'label-mode': labelText}" class="textarea" :placeholder="placeholder"/>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    labelText?: string,
    placeholder?: string,
}>(), {labelText: '', placeholder: ''});
</script>

<style scoped lang="scss">
.textarea {
    padding: 8px;
    background-color: #F4F2FF;
    border-radius: 6px;
    border: none;
    font-size: 16px;
    line-height: 15px;
    color: var(--black);
    resize: none;
    width: 100%;
    height: 107px;

    &:active, &:focus {
        border: none;
        outline: none;
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