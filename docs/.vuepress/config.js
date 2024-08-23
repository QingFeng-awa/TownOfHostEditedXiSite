import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'TOHEX官方网站',
  description: '为继承TOHE而衍生的分支',
  theme: defaultTheme({
    logo: '/TOHEX.png',
    navbar: [
        { text: "首页", link: "/"},
        { text: "关于", link: "/about"},
        { text: "下载", link: "/download"},
        { text: "公告", link: "/news"}
    ]
  }),
  bundler: viteBundler(),
})
