// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import { Icon } from '@iconify/vue'; // 导入 Iconify 的 Icon 组件
import { App } from 'vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Icon', Icon); // 注册 Icon 组件为全局组件
  }
};