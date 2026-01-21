<script setup lang="ts">
import type { Component } from 'vue'
import { Button } from '@/components/ui/button'

defineProps<{
  href: string
  text: string
  icon?: Component
}>()
</script>

<template>
  <Button variant="link" as-child>
    <a :href="href" target="_blank">
      <component v-if="icon" :is="icon" />
      {{ text }}
    </a>
  </Button>
</template>
