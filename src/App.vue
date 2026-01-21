<script setup lang="ts">
import { type Component } from 'vue'

import { GithubIcon, LinkedinIcon, MailIcon, ResumeIcon } from '@/components/icons'
import { ProjectCard } from '@/features/projects'
import ThemeSwitcher from './components/common/ThemeSwitcher.vue'
import InlineLink from './components/common/InlineLink.vue'
import LinkWithIcon from './components/common/LinkWithIcon.vue'
import { PROJECTS } from './features/projects/data'

interface Link {
  text: string
  href: string
  icon?: Component
}

const links: Link[] = [
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
</script>

<template>
  <div class="px-6 py-12 lg:py-24">
    <main class="mx-auto max-w-prose">
      <section id="Intro" class="mb-14">
        <div class="flex justify-between mb-8 items-end">
          <h1 class="text-4xl font-semibold tracking-tight text-foreground">Leo Tong</h1>
          <ThemeSwitcher />
        </div>

        <p class="mb-6 text-muted-foreground tracking-wide font-extralight">
          Web enthusiast and open-source developer based in Sydney.
        </p>

        <p class="mb-6 text-muted-foreground tracking-wide font-extralight">
          My current focus is building and maintaining software that make language learning and
          working with
          <InlineLink href="https://en.wikipedia.org/wiki/CJK_characters" text="CJK characters" />
          accessible to everyone.
        </p>

        <p class="mb-6 text-muted-foreground tracking-wide font-extralight">
          I also enjoy experimenting with APIs and libraries to build interactive web tools with
          intuitive user interfaces.
        </p>

        <p class="mb-6 text-muted-foreground tracking-wide font-extralight">
          Outside of programming, I practise the electric guitar and play video games.
          <InlineLink href="https://www.teamfortress.com/" text="Team Fortress 2" />
          is one of my favourite games.
        </p>

        <ul class="flex flex-wrap gap-3 border-l-2 pl-2">
          <li v-for="(link, index) in links" :key="index">
            <LinkWithIcon :href="link.href" :text="link.text" :icon="link.icon" />
          </li>
        </ul>
      </section>

      <section id="Works" class="mb-14">
        <h2 class="mb-7 text-2xl font-medium tracking-tight text-foreground">Works</h2>

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

        <p class="text-center text-muted-foreground tracking-wide font-extralight">
          To see more of my work, check out my
          <InlineLink href="https://github.com/TheRobertLing" text="Github" />.
        </p>
      </section>
    </main>
  </div>
</template>
