import { defineConfig, type DefaultTheme } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'
import { configDeDE, searchOptionsDeDE } from '../de-DE/config'
import { configPlPL, searchOptionsPlPL } from '../pl-PL/config'
import { configNlNL, searchOptionsNlNL } from '../nl-NL/config'
import { configFrFR, searchOptionsFrFR } from '../fr-FR/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-us',
  title: 'SkEditor',
  description: 'An app for editing Skript files.',

  head: [
    ['link', { rel: 'icon', href: '/assets/SkEditor.svg' }],
    ['meta', { name: 'theme-color', content: '#1cc91fff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'SkEditor - Docs' }],
    ['meta', { property: 'og:url', content: 'https://skeditor.notro.me/' }]
  ],
  cleanUrls: true,
  rewrites: {
    'en-US/:rest*': ':rest*'
  },

  lastUpdated: true,

  locales: {
    root: {
      label: 'English'
    },
    'de-DE': configDeDE,
    'pl-PL': configPlPL,
    'nl-NL': configNlNL,
    'fr-FR': configFrFR
  },

  appearance: 'force-dark',
  themeConfig: {
    i18nRouting: true,

    logo: '/assets/SkEditor.svg',

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
          'pl-PL': searchOptionsPlPL(),
          'nl-NL': searchOptionsNlNL(),
          'fr-FR': searchOptionsFrFR()
        }
      }
    }
  },
  markdown: {
    async config(md) {
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'de-DE':
              return 'Code kopieren'
            case 'nl-NL':
              return 'Code kopiëren'
            case 'fr-FR':
              return 'Copier le code'
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
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          skript: localIconLoader(
            import.meta.url,
            '../public/assets/Skript.svg'
          ),
          sk: localIconLoader(import.meta.url, '../public/assets/Skript.svg')
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
      text: 'Advanced',
      collapsed: true,
      items: [
        { text: 'Compiling', link: '/advanced/compiling' },
        { text: 'Contributing', link: '/advanced/contributing' }
      ]
    }
  ]
}
