---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 歪歪~知识库
  text: CS & AI
  tagline: 今日长缨在手 <br> &nbsp;&nbsp; 何时缚住苍龙？
  image:
    dark: ./logo/token-branded--crvusd.svg
    light: ./logo/token-branded--crv.svg
    # alt: logo
  actions:
    - theme: brand
      text: 开始
      # link: /guide/what-is-vitepress
    - theme: alt
      text: 在GitHub上查看
      link: https://github.com/vuejs/vitepress

features:
  - icon: 
      src: ./logo/gemini.svg
    title: NLP & LLM
    details: 大模型学习相关笔记与实践 <br> ( 正在实践......
  - icon:
      dark: ./logo/leetcode_light.svg
      light: ./logo/leetcode_dark.svg
    title: LeetCode
    details: 力扣力扣 <br> 每日一题A了没？
  - icon:
      src: ./logo/token-branded--nexa.svg
    title: DeepLearing
    details: 深度学习入门 <br> ( RNN / GNN 计划复现中......
---


<script setup>
import WaterFlowCanvas from '../.vitepress/theme/components/WaterFlowCanvas.vue'
</script>

<WaterFlowCanvas />