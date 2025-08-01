import {
  defineConfig,
  resolveSiteData,
  type HeadConfig,
  type DefaultTheme
} from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'
import { configDeDE, searchOptionsDeDE } from '../de-DE/config'
import { configDeAT, searchOptionsDeAT } from '../de-AT/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-us',
  title: 'SkEditor',
  description: 'An app for editing Skript files.',
  appearance: 'force-dark',
  head: [
    ['link', { rel: 'icon', href: '/assets/SkEditor.svg' }],
    ['meta', { name: 'theme-color', content: '#1cc91fff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'SkEditor - Docs' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'http://localhost:5173/assets/SkEditor.png'
      }
    ],
    ['meta', { property: 'og:url', content: 'https://skeditor.notro.me/' }]
  ],
  cleanUrls: true,
  lastUpdated: true,
  locales: {
    root: {
      label: 'English'
    },
    'de-DE': configDeDE,
    'de-AT': configDeAT
  },
  markdown: {
    config(md) {
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'de-DE':
              return 'Code kopieren'
            default:
              return 'Copy code'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
      md.use(groupIconMdPlugin)
    }
  },
  rewrites: {
    'en-US/:rest*': ':rest*'
  },
  themeConfig: {
    logo: '/assets/SkEditor.svg',
    i18nRouting: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/first-steps/intro' }
    ],
    sidebar: sidebar(),

    socialLinks: [
      { icon: 'kofi', link: 'https://ko-fi.com/notro' },
      { icon: 'discord', link: 'https://skeditordc.notro.me' },
      {
        icon: 'github',
        link: 'https://github.com/SkEditorTeam/SkEditor'
      }
    ],

    editLink: {
      pattern:
        'https://github.com/SkEditorTeam/SkEditorDocs/edit/main/docs/:path',
      text: 'Edit this page on Github'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          'de-DE': searchOptionsDeDE(),
          'de-AT': searchOptionsDeAT()
        }
      }
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          skript: localIconLoader(
            import.meta.url,
            '../public/assets/Skript.png'
          ),
          skeditor: localIconLoader(
            import.meta.url,
            '../public/assets/SkEditor.svg'
          )
        }
      })
    ]
  }
})

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'First steps',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/first-steps/intro' },
        { text: 'Installation', link: '/first-steps/installation' }
      ]
    },
    {
      text: 'Usage',
      collapsed: false,
      items: [
        {
          text: 'FTP Integration',
          link: '/usage/ftp-integration'
        },
        {
          text: 'Experiments',
          collapsed: true,
          link: '/usage/experiments',
          items: [
            {
              text: 'Code Completion',
              link: '/usage/experiments/code-completion'
            },
            {
              text: 'Projects',
              link: '/usage/experiments/projects'
            },
            {
              text: 'Hex Preview',
              link: '/usage/experiments/hex-preview'
            }
          ]
        }
      ]
    },
    {
      text: 'Addons',
      collapsed: false,
      items: [
        { text: 'Analyzer', link: '/addons/analyzer' },
        {
          text: 'Creating an Addon',
          link: '/addons/creating-an-addon'
        }
      ]
    },
    {
      text: 'Contributing',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/contributing/overview' },
        { text: 'Compiling', link: '/contributing/compiling' },
        { text: 'Code rules', link: '/contributing/code-rules' }
      ]
    }
  ]
}
