<script setup lang="ts">
import { Button } from '@/components/ui/button'

defineProps<{
  href: string
  text: string
}>()
</script>

<template>
  <Button variant="link" class="p-0 px-1 h-fit" as-child>
    <a :href="href" target="_blank">{{ text }}</a>
  </Button>
</template>
