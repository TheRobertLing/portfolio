import type { Component } from 'vue'

export interface Project {
  name: string
  description: string
  technologies: string[]
  githubLink?: string
  demoLink?: string
  preview?: Component
}

export const PROJECTS: Project[] = [
  {
    name: 'HanziAnimator',
    description: `An interactive tool for extracting stroke order animation data from Chinese character glyphs.`,
    technologies: ['Opentype.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'WebVTT Studio',
    description: `A minimal editor for creating WebVTT subtitles with auto-subtitling support.`,
    technologies: ['Transformers.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Cube Timer',
    description: `An intuitive Rubik's cube timer with performance statistics for casual cubers.`,
    technologies: ['D3.js', 'React.js', 'TypeScript'],
  },
  {
    name: 'ZiTube',
    description: `A curated collection of dubbed YouTube videos for Mandarin learners with dual subtitles.`,
    technologies: ['yt-dlp', 'WhisperX', 'Nuxt.js', 'Supabase'],
  },
  {
    name: 'MVM World',
    description: `A community hub for players of the Mann vs Machine gamemode in Team Fortress 2.`,
    technologies: ['Steam API', 'React.js', 'Next.js', 'Supabase'],
  },
]
