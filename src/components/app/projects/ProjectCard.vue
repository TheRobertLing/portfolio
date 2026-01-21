<script setup lang="ts">
import type { Component } from 'vue'
import { ExternalLink } from 'lucide-vue-next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GithubIcon } from '@/components/app/shared'

defineProps<{
  name: string
  description: string
  technologies: string[]
  githubLink?: string
  demoLink?: string
  preview?: Component
}>()
</script>

<template>
  <Card class="pt-0 mb-6">
    <CardContent class="flex aspect-video items-center justify-center border-b">
      <component v-if="preview" :is="preview" />
      <span v-else class="px-6 text-center text-sm italic">No Preview</span>
    </CardContent>

    <CardHeader class="gap-3">
      <CardTitle>{{ name }}</CardTitle>
      <CardDescription class="mb-0 tracking-wide font-normal">
        {{ description }}
      </CardDescription>
      <ul class="flex flex-wrap gap-2">
        <li v-for="(technology, idx) in technologies" :key="idx">
          <Badge variant="secondary" class="rounded-md">
            {{ technology }}
          </Badge>
        </li>
      </ul>
    </CardHeader>

    <CardFooter class="gap-3 flex flex-col sm:flex-row">
      <Button variant="outline" as-child>
        <a :href="githubLink" class="cursor-pointer w-full sm:w-fit">
          <GithubIcon /> Github Repository
        </a>
      </Button>
      <Button as-child>
        <a :href="demoLink" class="cursor-pointer w-full sm:w-fit"> <ExternalLink /> Live Demo </a>
      </Button>
    </CardFooter>
  </Card>
</template>
