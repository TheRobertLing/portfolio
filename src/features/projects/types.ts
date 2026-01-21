import type { Component } from 'vue'

export interface Project {
  name: string
  description: string
  technologies: string[]
  githubLink?: string
  demoLink?: string
  preview?: Component
}
