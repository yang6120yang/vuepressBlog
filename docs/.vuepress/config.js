const nav = [
  {
    text: '主页',
    link: '/'
  },
  {
    text: 'CSS技巧',
    items: [
      { text: '工具', link: '/css_tricks/createTriangle/' },
      { text: '布局及全局', link: '/css_tricks/flexbox/' },
      { text: '属性定制', link: '/css_tricks/cursor/' },
      { text: '动画', link: '/css_tricks/accordion/' },
      { text: '综合特效', link: '/css_tricks/paper/' }
    ]
  },
  {
    text: 'js技巧',
    link: '/js_tricks/reg/'
  },
  {
    text: '文章',
    link: '/articles/'
  }
]
const sidebar = {
  '/css_tricks/': [
    {
      title: '工具',
      collapsable: false,
      children: [
        'createTriangle/',
        'sector/'
      ],
    },
    {
      title: '布局及全局',
      collapsable: false,
      children: [
        'alignCenter/',
        'flexbox/',
        'grid/',
        'reset/',
        'remDpi/',
        'mdedia/',
        'landscapeScreen/',
        'polygonLayout/'
      ]
    },
    {
      title: '属性定制',
      collapsable: false,
      children: [
        'cursor/',
        'shadow/',
        'verticalMiddle/',
        'vertical/',
        'align/',
        'longText/',
        'lineBreak/',
        'ellipsis/',
        'scrollTemp/',
        'triangle/',
        'filter/',
        'object/',
        'mixBlendMode/'
      ]
    },
    {
      title: '动画',
      collapsable: false,
      children: [
        'accordion/',
        'hover/',
        'loading/',
        'spring/',
        'parabola/',
        'notCSS/ripple',
        'notCSS/wave'
      ]
    },
    {
      title: '综合特效',
      collapsable: false,
      children: [
        'paper/',
        'glass/',
        'hollowOut/',
        'textShadow/',
        'positionWidth/',
        'bottom/',
        'tab/'
      ]
    }
  ],
  '/js_tricks/': [
    {
      title: 'DOM相关',
      collapsable: true,
      children: [
        'jsDom/jsDomApi'
      ]
    },
    {
      title: 'BOM相关',
      collapsable: true,
      children: [
        'jsBom/jsBomApi'
      ]
    },
    {
      title: 'Object相关',
      collapsable: true,
      children: [
        'jsObject/jsObjectApi'
      ]
    },
    {
      title: '数组相关',
      collapsable: true,
      children: [
        'array/'
      ]
    },
    {
      title: '常用验证',
      collapsable: true,
      children: [
        'reg/'
      ]
    },
    {
      title: '精彩特效',
      collapsable: true,
      children: [
        'activatePowerMode/'
      ]
    },
    {
      title: '常用方法',
      collapsable: true,
      children: [
        'block/README1',
        'block/README2'
      ]
    },
  ]
}

var config = {
  title: 'Umeus Blog',
  description: '前端踩坑之路，学习各路大神，走出属于自己的路!',
  dest: './dist', // 设置输出目录
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#00adb5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#00adb5' }],
    ['meta', {name:'description', itemprop: 'description', content: '前端踩坑之路，学习各路大神，走出属于自己的路!' }],
    ['meta', { itemprop: 'name', content: 'css_trick' }],
    ['meta', { itemprop: 'image', content: '/css_tricks/images/favicon.png' }],
  ],
  // repo: 'https://qishaoxuan.github.io', // 添加 github 链接
  themeConfig: {
    themeConfig: {
      lastUpdated: 'Last Updated',
    },
    // displayAllHeaders: true, // 显示所有页面的标题链接
    // editLinks: true,
    // editLinkText: '查看原文|编辑此页',
    nav,
    sidebarDepth: 1,
    sidebar
  },
  plugins: ['@vuepress/back-to-top']
}

module.exports = config
