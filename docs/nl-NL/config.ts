import { type DefaultTheme } from 'vitepress'
import { LocaleConfig } from '../.vitepress/types'

const configNlNL: LocaleConfig = {
  label: 'Nederlands',
  lang: 'nl-NL',
  title: 'SkEditor',
  description: 'Een app voor het bewerken van Skript-bestanden',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/nl-NL' },
      { text: 'Documentatie', link: '/nl-NL/first-steps/intro' }
    ],

    sidebar: {
      '/nl-NL/': { base: '/nl-NL/', items: sidebar() }
    },

    editLink: {
      pattern:
        'https://github.com/SkEditorTeam/SkEditorDocs/edit/main/docs/:path',
      text: 'Bewerk deze pagina op GitHub'
    },

    ...translations()
  }
}

function translations() {
  return {
    notFound: {
      title: 'PAGINA NIET GEVONDEN',
      quote: '',
      linkLabel: 'Ga naar home',
      linkText: 'Ga naar home'
    },

    sidebarMenuLabel: 'Menu',
    outline: {
      label: 'Op deze pagina'
    },

    lastUpdated: {
      text: 'Laatst bijgewerkt'
    },
    docFooter: {
      prev: 'Vorige pagina',
      next: 'Volgende pagina'
    },

    langMenuLabel: 'Taal wijzigen'
  }
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Eerste stappen',
      collapsed: false,
      items: [
        { text: 'Introductie', link: '/first-steps/intro' },
        { text: 'Installatie', link: '/first-steps/installation' }
      ]
    },
    {
      text: 'Gebruik',
      collapsed: false,
      items: [
        {
          text: 'FTP-integratie',
          link: '/usage/ftp-integration'
        },
        {
          text: 'Experimenten',
          collapsed: true,
          link: '/usage/experiments',
          items: [
            {
              text: 'Code-aanvulling',
              link: '/usage/experiments/code-completion'
            },
            {
              text: 'Projecten',
              link: '/usage/experiments/projects'
            },
            {
              text: 'Hex-voorbeeld',
              link: '/usage/experiments/hex-preview'
            }
          ]
        }
      ]
    },
    {
      text: 'Add-ons',
      collapsed: false,
      items: [
        { text: 'Analyzer', link: '/addons/analyzer' },
        {
          text: 'Een add-on maken',
          link: '/addons/creating-an-addon'
        }
      ]
    },
    {
      text: 'Geavanceerd',
      collapsed: true,
      items: [
        { text: 'Compileren', link: '/advanced/compiling' },
        { text: 'Bijdragen', link: '/advanced/contributing' }
      ]
    }
  ]
}

function searchOptionsNlNL(): Partial<DefaultTheme.LocalSearchOptions> {
  return {
    translations: {
      button: {
        buttonText: 'Zoeken',
        buttonAriaLabel: 'Zoeken'
      },
      modal: {
        displayDetails: 'Gedetailleerde lijst weergeven',
        resetButtonTitle: 'Zoekopdracht wissen',
        backButtonTitle: 'Zoeken sluiten',
        noResultsText: 'Geen resultaten',
        footer: {
          selectText: 'selecteren',
          selectKeyAriaLabel: 'selecteren',
          navigateText: 'navigeren',
          navigateDownKeyAriaLabel: 'Pijl-omlaag',
          navigateUpKeyAriaLabel: 'Pijl-omhoog',
          closeText: 'sluiten',
          closeKeyAriaLabel: 'sluiten'
        }
      }
    }
  }
}

export { configNlNL, searchOptionsNlNL }
