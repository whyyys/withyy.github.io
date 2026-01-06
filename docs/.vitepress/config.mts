import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress';

// ...existing code...

// https://vitepress.dev/reference/site-config

const base = "/";

export default defineConfig({
  base,
  locales: {
    root: {
      lang: 'zh-Hans',
      label: '简体中文',
      title: '📘 YysDocs',
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
          message: '基于 MIT 协议发布',
          copyright: '版权所有 © 2026-01-06 至今 whyyys'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/whyyys' }
        ]
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
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026-01-06 to present whyyys'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/whyyys' }
        ]
      }
    }
  },
  outDir: "dist", 
  srcDir: "src",
  lastUpdated: true,
  vite: { server: {allowedHosts: true} }
})

function nav(locale: string): DefaultTheme.NavItem[] {
  if (locale === 'en') {
    return [
      { text: 'Guide', link: '/markdown-examples', activeMatch: '/markdown-examples' },
      { text: 'API Examples', link: '/api-examples', activeMatch: '/api-examples' }
    ];
  }
  return [
    { text: '指南', link: '/markdown-examples', activeMatch: '/markdown-examples' },
    { text: 'API 示例', link: '/api-examples', activeMatch: '/api-examples' }
  ];
}

function sidebar(locale: string): DefaultTheme.Sidebar {
  if (locale === 'en') {
    return [
      {
        text: 'Guide',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ];
  }
  return [
    {
      text: '指南',
      items: [
        { text: 'Markdown 示例', link: '/markdown-examples' },
        { text: '运行时 API 示例', link: '/api-examples' }
      ]
    }
  ];
}


