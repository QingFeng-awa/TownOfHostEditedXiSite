import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { noticePlugin } from '@vuepress/plugin-notice'

export default defineUserConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.png' }]],
  title: 'TOHEX官方网站',
  description: '为继承TOHE而衍生的分支',
  plugins: [
    noticePlugin({
      config: [
        {
          path: "/",
          title: "TOHEX官网回归!",
          content: "TOHEX自2024年8月23日起将开始稳定运行并提供完整功能。<br>TOHEX官方网站将持续运营到域名到期(2025.9.10)。",
          showOnce: true,
          fullscreen: true
        }
      ]
    })
  ],
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
    editlink: false,
    logo: '/TOHEX.png',
    navbar: [
      { text: "首页", link: "/"},
      { text: "关于", link: "/about"},
      { text: "下载", link: "/download"}
    ],
    locales: {
      "/": {
        notFound: ["404NotFound - 页面未找到"],
        backToHome: "返回首页",
        toggleColorMode: "切换颜色模式",
        toggleSidebar: "打开导航栏"
      }
    }
  }),
  bundler: viteBundler(),
})
