<script setup lang="ts">
import IntroLinkWithIcon from '@/components/IntroLinkWithIcon.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import TextLink from '@/components/TextLink.vue'
import TextParagraph from '@/components/TextParagraph.vue'
import GithubIcon from '@/components/GithubIcon.vue'
import LinkedinIcon from '@/components/LinkedinIcon.vue'
import MailIcon from '@/components/MailIcon.vue'
import ResumeIcon from '@/components/ResumeIcon.vue'
import type { Component } from 'vue'

interface IntroLink {
  text: string
  href: string
  icon?: Component
}

interface Project {
  name: string
  description: string
  technologies: string[]
  githubLink?: string
  demoLink?: string
  preview?: Component
}

const INTRO_LINKS: IntroLink[] = [
  {
    text: 'Resume',
    href: '/resume',
    icon: ResumeIcon,
  },
  {
    text: 'Github',
    href: 'https://github.com/TheRobertLing',
    icon: GithubIcon,
  },
  {
    text: 'Linkedin',
    href: 'https://www.linkedin.com/in/leo-tianze-tong-1694a3222/',
    icon: LinkedinIcon,
  },
  {
    text: 'Email',
    href: 'mailto:lingrobert929@gmail.com',
    icon: MailIcon,
  },
]

const PROJECTS: Project[] = [
  {
    name: 'FontViewer',
    description:
      'An interactive tool for inspecting and previewing font files with detailed glyph information',
    technologies: ['Opentype.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'HanziClassroom',
    description:
      'A spaced repetition flashcard app for learning Chinese characters with dictionary lookups',
    technologies: ['CC-CEDICT', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'HSCTracker',
    description: 'A study tool for senior HSC students to manage exam prep',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
  },
]
</script>

<template>
  <div class="px-6 py-12 lg:py-24">
    <main class="mx-auto max-w-prose">
      <section id="Intro" class="mb-14">
        <div class="flex justify-between mb-8 items-end">
          <h1 class="text-4xl font-semibold tracking-tight text-foreground">Leo Tong</h1>
          <ThemeSwitcher />
        </div>

        <TextParagraph> Web enthusiast and open-source developer based in Sydney. </TextParagraph>

        <TextParagraph>
          My current focus is building and maintaining web applications that make language learning
          and working with
          <TextLink href="https://en.wikipedia.org/wiki/CJK_characters" text="CJK characters" />
          accessible to everyone.
        </TextParagraph>

        <TextParagraph>
          I also enjoy experimenting with APIs and libraries to build interactive web tools with
          intuitive user interfaces.
        </TextParagraph>

        <TextParagraph>
          Outside of programming, I practise the electric guitar and play video games.
          <TextLink href="https://www.teamfortress.com/" text="Team Fortress 2" />
          is one of my favourite games.
        </TextParagraph>

        <ul class="flex flex-wrap gap-3 border-l-2 pl-2">
          <li v-for="(link, index) in INTRO_LINKS" :key="index">
            <IntroLinkWithIcon :href="link.href" :text="link.text" :icon="link.icon" />
          </li>
        </ul>
      </section>

      <section id="Projects" class="mb-14">
        <h2 class="mb-7 text-2xl font-medium tracking-tight text-foreground">Projects</h2>

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
          To see more of my projects, check out my
          <TextLink href="https://github.com/TheRobertLing" text="Github" />.
        </TextParagraph>
      </section>
    </main>
  </div>
</template>
