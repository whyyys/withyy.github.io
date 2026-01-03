// import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const base = "/MyBlog/";

// export default defineConfig({
export default ({
  base,
  title: "MyBlog",
  description: "A VitePress Site",
  outDir: "dist", 
  srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/whyyys' }
    ]
  }
})


