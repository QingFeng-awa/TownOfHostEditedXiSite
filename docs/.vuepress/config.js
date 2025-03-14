import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { noticePlugin } from '@vuepress/plugin-notice'

export 默认 defineUserConfig({
  lang: 'zh-CN'，
  head: [['link'， { rel: 'shortcut icon'， href: '/favicon.png' }]]，
  title: 'TOHEX官方网站'，
  description: '为继承TOHE而衍生的分支'，
  theme: defaultTheme({
    lastUpdated: false，
    贡献者: false，
    editlink: false，
    logo: '/TOHEX.png'，
    navbar: [
      { text: "首页"， link: "/"}，
      { text: "关于"， link: "/about"}
    ]，
    locales: {
      "/": {
        notFound: ["404NotFound - 页面未找到"]，
        backToHome: "返回首页"，
        toggleColorMode: "切换颜色模式"，
        toggleSidebar: "打开导航栏"
      }
    }
  })，
  bundler: viteBundler()，
})
