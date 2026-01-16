// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme';
import { Icon } from '@iconify/vue'; // 导入 Iconify 的 Icon 组件
import './style/custom.css'; // 导入自定义样式

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Icon', Icon); // 注册 Icon 组件为全局组件
  }
}satisfies Theme;