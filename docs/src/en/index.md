---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: YY Knowledge Base
  text: CS & AI
  tagline: Today we hold the long rope, <br> &nbsp;&nbsp; when will we bind the dragon?
  image:
    dark: ./logo/token-branded--crvusd.svg
    light: ./logo/token-branded--crv.svg
    # alt: logo
  actions:
    - theme: brand
      text: Get Started
      # link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress

features:
  - icon: 
      src: ./logo/gemini.svg
    title: NLP & LLM
    details: Notes and practices on large model learning <br> ( In progress...... )
  - icon:
      dark: ./logo/leetcode_light.svg
      light: ./logo/leetcode_dark.svg
    title: LeetCode
    details: LeetCode LeetCode <br> Have you solved today's problem?
  - icon:
      src: ./logo/token-branded--nexa.svg
    title: Deep Learning
    details: Introduction to Deep Learning <br> ( RNN / GNN reproduction in progress...... )
---


<script setup>
import WaterFlowCanvas from '../../.vitepress/theme/components/WaterFlowCanvas.vue'
</script>

<WaterFlowCanvas />