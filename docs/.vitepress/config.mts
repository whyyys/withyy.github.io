import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/site-config

const base = "/";
const logo = "/logo/token-branded--uwu.svg";
const socialLinks: DefaultTheme.SocialLink[] = [
  { icon: 'github', link: 'https://github.com/whyyys' },
  {
    icon: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="SVGN1cfrT9y" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937)scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"/><stop offset="1" stop-color="#bd34fe"/></linearGradient><linearGradient id="SVGk86M3d2e" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937)scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffea83"/><stop offset=".083" stop-color="#ffdd35"/><stop offset="1" stop-color="#ffa800"/></linearGradient></defs><path fill="url(#SVGN1cfrT9y)" d="M124.766 19.52L67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.1 3.1 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594m0 0"/><path fill="url(#SVGk86M3d2e)" d="M91.46 1.43L48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968l34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43m0 0"/></svg>'
    },
    link: 'https://vitepress.dev'
  }
]

export default defineConfig({
  base,
  locales: {
    root: {
      lang: 'zh-Hans',
      label: '简体中文',
      title: 'YysDocs',
      description: '歪歪只是随便写写...',
      themeConfig: {
        nav: nav('zh'),
        sidebar: sidebar('zh'),
        externalLinkIcon: true,
        darkModeSwitchLabel: '主题切换',
        langMenuLabel: '选择语言',
        lightModeSwitchTitle: '切换到明亮模式',
        darkModeSwitchTitle: '切换到暗黑模式',
        sidebarMenuLabel: '导航菜单',
        outline: { level: [2, 3], label: '页面目录' },
        returnToTopLabel: '回到顶部',
        editLink: {
          pattern: 'https://github.com/whyyys/whyyys.github.io/edit/main/docs/src/:path',
          text: '在 GitHub 上编辑此页面'
        },
        lastUpdated: {
          text: '最后更新于'
        },
        docFooter: {
          prev: '上一章节',
          next: '下一章节'
        },
        footer: {
          message: '本项目基于 VitePress 构建，源代码遵循 MIT 协议，文章内容遵循 CC BY-NC-SA 4.0 协议',
          copyright: '版权所有 © 2026-01-06 至今 whyyys'
        },
        socialLinks,
      }
    },
    en: {
      lang: 'en-US',
      label: 'English',
      title: 'YysDocs',
      description: 'Yy is just casually writing...',
      themeConfig: {
        nav: nav('en'),
        sidebar: sidebar('en'),
        externalLinkIcon: true,
        darkModeSwitchLabel: 'Theme Switch',
        langMenuLabel: 'Language',
        lightModeSwitchTitle: 'Switch to Light Mode',
        darkModeSwitchTitle: 'Switch to Dark Mode',
        sidebarMenuLabel: 'Navigation Menu',
        outline: { level: [2, 3], label: 'Table of Contents' },
        returnToTopLabel: 'Back to Top',
        editLink: {
          pattern: 'https://github.com/whyyys/whyyys.github.io/edit/main/docs/src/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated on'
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        footer: {
          message: 'This project is built with VitePress. The source code is licensed under the MIT License, and the articles are licensed under CC BY-NC-SA 4.0.',
          copyright: 'Copyright © 2026-01-06 to present whyyys'
        },
        socialLinks,
      }
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo/favicon.ico', sizes: '32x32' }],
    ['link', { rel: 'icon', href: '/logo/favicon.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    logo: logo,
    // siteTitle: 'Hello World'
  },
  outDir: "dist", 
  srcDir: "src",
  lastUpdated: true,
  vite: { server: {allowedHosts: true},
          publicDir: "public" },
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    },
    math: true,
  },
})

function nav(locale: string): DefaultTheme.NavItem[] {
  if (locale === 'en') {
    return [
      { text: 'Guide', link: '/en/guide/markdown-examples', activeMatch: '/en/markdown-examples' },
      { text: 'API Examples', link: '/en/guide/api-examples', activeMatch: '/en/api-examples' },
      {
        text: 'Large Language Models',
        items: [
          { text: 'Preface', link: '/en/LLM/preface', activeMatch: '/en/LLM/preface' },
        ]
      },
      {
        text: 'LeetCode',
        items: [
          { text: 'Daily Problem', link: '/en/leetcode/everyday', activeMatch: '/en/leetcode/everyday' },
          {
            text: 'Specialized Practice',
            items: [
              { text: 'Sliding Window', link: '/en/leetcode/sliding-window', activeMatch: '/en/leetcode/sliding-window' },
              { text: 'Two Pointers', link: '/en/leetcode/two-pointers', activeMatch: '/en/leetcode/two-pointers' }
            ]
          }
        ]
      },
    ];
  }
  return [
    { text: '指南', link: '/guide/markdown-examples', activeMatch: '/guide/markdown-examples' },
    { text: 'API 示例', link: '/guide/api-examples', activeMatch: '/guide/api-examples' },
    {
        text: '大模型',
        items: [
          { text: '前言', link: '/LLM/preface', activeMatch: '/LLM/preface' },
          { text: 'Transformer 模型', link: '/LLM/Transformer', activeMatch: '/LLM/Transformer' }
        ]
    },
    {
        text: '力扣力扣',
        items: [
          { text: '每日一题', link: '/leetcode/everyday', activeMatch: '/leetcode/everyday' },
          {
            text: '专项练习',
            items: [
              { text: '滑动窗口', link: '/leetcode/sliding-window', activeMatch: '/leetcode/sliding-window' },
              { text: '双指针', link: '/leetcode/two-pointers', activeMatch: '/leetcode/two-pointers' }
            ]
          },
          {text: '工具函数', link: '/leetcode/tools', activeMatch: '/leetcode/tools'},
        ]
    },
  ];
}

function sidebar(locale: string): DefaultTheme.Sidebar {
  if (locale === 'en') {
    return {
      '/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Markdown Examples', link: '/en/guide/markdown-examples' },
            { text: 'Runtime API Examples', link: '/en/guide/api-examples' }
          ]
        },
      ],
      '/en/LLM/': [
        {
          text: 'Large Language Models',
          items: [
            { text: 'Preface', link: '/en/LLM/preface' },
          ]
        }
      ],
      '/en/leetcode/': [
        {
          text: 'LeetCode',
          items: [
            { text: 'Daily Problem', link: '/en/leetcode/everyday' },
            { text: 'Sliding Window', link: '/en/leetcode/sliding-window' },
            { text: 'Two Pointers', link: '/en/leetcode/two-pointers' }
          ]
        }
      ]
    };
  }
  return {
    '/guide/': [
        {
          text: '指南',
          items: [
            { text: 'Markdown 示例', link: '/guide/markdown-examples' },
            { text: '运行时 API 示例', link: '/guide/api-examples' }
          ]
        },
      ],
    '/LLM/': [
      {
        text: '大模型',
        items: [
          { text: '前言', link: '/LLM/preface' },
        ]
      }
    ],
    '/leetcode/': [
      {
        text: '力扣力扣',
        items: [
          { text: '每日一题', link: '/leetcode/everyday' },
          { text: '滑动窗口', link: '/leetcode/sliding-window' },
          { text: '双指针', link: '/leetcode/two-pointers' },
          { text: '工具函数', link: '/leetcode/tools' },
        ]
      }
    ]
  };
}


