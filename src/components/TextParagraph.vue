<script setup lang="ts">
defineProps<{
  centered?: boolean
}>()
</script>

<template>
  <p
    class="mb-6 text-muted-foreground tracking-wide font-normal"
    :class="{ 'text-center': centered }"
  >
    <slot />
  </p>
</template>
