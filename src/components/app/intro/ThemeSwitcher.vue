<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'

const isDark = useDark()
const toggle = useToggle(isDark)
</script>

<template>
  <Button variant="ghost" title="Toggle Theme" @click="toggle()">
    <Transition name="spin-fade" mode="out-in">
      <Sun v-if="isDark" />
      <Moon v-else />
    </Transition>
    Toggle Theme
  </Button>
</template>

<style scoped>
.spin-fade-enter-active,
.spin-fade-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.spin-fade-enter-from {
  transform: rotate(-180deg);
  opacity: 0;
}
.spin-fade-enter-to {
  transform: rotate(0deg);
  opacity: 1;
}
.spin-fade-leave-from {
  transform: rotate(0deg);
  opacity: 1;
}
.spin-fade-leave-to {
  transform: rotate(180deg);
  opacity: 0;
}
</style>
