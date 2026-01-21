<script setup lang="ts">
defineProps<{
  level?: 1 | 2
}>()
</script>

<template>
  <h1 v-if="level === 1" class="text-4xl font-semibold tracking-tight text-foreground">
    <slot />
  </h1>
  <h2 v-else class="mb-7 text-2xl font-medium tracking-tight text-foreground">
    <slot />
  </h2>
</template>
