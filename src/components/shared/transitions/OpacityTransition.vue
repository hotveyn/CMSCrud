<template>
    <Transition name="opacity">
        <slot/>
    </Transition>
</template>

<style lang="scss">

.opacity-enter-active,
.opacity-leave-active {
  transition: opacity .2s linear;
}
.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}
</style>