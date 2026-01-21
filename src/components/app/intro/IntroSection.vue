<script setup lang="ts">
import { TextParagraph, TextLink } from '@/components/app/shared'
import { INTRO_LINKS } from './data'
import IntroLinkWithIcon from './IntroLinkWithIcon.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
</script>

<template>
  <section id="Intro" class="mb-14">
    <div class="flex justify-between mb-8 items-end">
      <h1 class="text-4xl font-semibold tracking-tight text-foreground">Leo Tong</h1>
      <ThemeSwitcher />
    </div>

    <TextParagraph> Web enthusiast and open-source developer based in Sydney. </TextParagraph>

    <TextParagraph>
      My current focus is building and maintaining software that make language learning and working
      with
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
</template>
