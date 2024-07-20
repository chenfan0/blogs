module.exports = {
  name: 'Fan Chen',
  title: 'Fan Chen',
  description: '每天进步一点点 🚀',
  avatar: '/avatar.png',
  logo: '/logo.png',
  siteUrl: 'https://blog.chenfan.cc',
  // icon 请在 src/components/Profile.tsx 中修改
  links: [
    { name: 'GitHub', link: 'https://github.com/chenfan0' },
    { name: '稀土掘金', link: 'https://juejin.cn/user/1126370596894606' },
    { name: 'RSS', link: '/feed.xml' },
  ],
  // en | zh-CN
  language: 'zh-CN',
  // 侧边目录
  toc: true,
  // 显示上一篇下一篇按钮
  adjacentPosts: true,
  // 配置文章过时提醒阈值
  outdatedPostThresholdDays: 90,
  markdown: {
    // 统一配置 CodeBlock 是否显示行号，也可以在 frontmatter 中通过 lineNumbers 字段单独设置
    lineNumbers: false,
  },
  backToTopButton: true
}
