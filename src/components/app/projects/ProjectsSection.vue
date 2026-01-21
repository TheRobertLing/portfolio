<script setup lang="ts">
import { SectionHeading, TextLink, TextParagraph } from '@/components/app/shared'
import { PROJECTS } from './data'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="Projects" class="mb-14">
    <SectionHeading>Works</SectionHeading>

    <ul class="space-y-0">
      <li v-for="(project, index) in PROJECTS" :key="index">
        <ProjectCard
          :name="project.name"
          :description="project.description"
          :technologies="project.technologies"
          :github-link="project.githubLink"
          :demo-link="project.demoLink"
          :preview="project.preview"
        />
      </li>
    </ul>

    <TextParagraph centered>
      To see more of my works, check out my
      <TextLink href="https://github.com/TheRobertLing" text="Github" />.
    </TextParagraph>
  </section>
</template>
