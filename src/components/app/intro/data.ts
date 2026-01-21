import type { Component } from 'vue'
import { GithubIcon, LinkedinIcon, MailIcon, ResumeIcon } from '../shared'

export interface IntroLink {
  text: string
  href: string
  icon?: Component
}

export const INTRO_LINKS: IntroLink[] = [
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
