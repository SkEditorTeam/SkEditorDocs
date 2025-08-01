import { type DefaultTheme } from 'vitepress'
import { LocaleConfig } from '../.vitepress/types'

const configDeAT: LocaleConfig = {
  label: 'Deutsch (Österreich)',
  lang: 'at-AT',
  title: 'SkEditor AT',
  description: 'Eine App zum Bearbeiten von Skriptdateien',

  themeConfig: {
    nav: [
      { text: 'Startseite', link: '/de-AT' },
      { text: 'Dokumentation', link: '/de-AT/first-steps/intro' }
    ],

    sidebar: {
      '/de-AT/': { base: '/de-AT/', items: sidebar() }
    },

    editLink: {
      pattern:
        'https://github.com/SkEditorTeam/SkEditorDocs/edit/main/docs/:path',
      text: 'Auf Github bearbeiten'
    },

    ...translations()
  }
}

function translations() {
  return {
    lastUpdated: {
      text: 'Zuletzt geändert am'
    },

    notFound: {
      title: 'SEITE NICHT GEFUNDEN',
      quote: '',
      linkLabel: 'Nach hause',
      linkText: 'Nach hause'
    },

    outline: {
      label: 'Auf dieser Seite'
    },

    langMenuLabel: 'Sprache ändern',
    sidebarMenuLabel: 'Menu',
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    }
  }
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Erste Schritte',
      collapsed: false,
      items: [
        { text: 'Einführung', link: '/first-steps/intro' },
        { text: 'Installation', link: '/first-steps/installation' }
      ]
    },
    {
      text: 'Benutzung',
      collapsed: false,
      items: [
        {
          text: 'FTP Integration',
          link: '/usage/ftp-integration'
        },
        {
          text: 'Experimente',
          collapsed: true,
          link: '/usage/experiments',
          items: [
            {
              text: 'Code Vervollständigung',
              link: '/usage/experiments/code-completion'
            },
            {
              text: 'Projekte',
              link: '/usage/experiments/projects'
            },
            {
              text: 'Hex Vorschau',
              link: '/usage/experiments/hex-preview'
            }
          ]
        }
      ]
    },
    {
      text: 'Erweiterungen',
      collapsed: false,
      items: [
        { text: 'Analyzer', link: '/addons/analyzer' },
        {
          text: 'Eine Erweiterung erstellen',
          link: '/addons/creating-an-addon'
        }
      ]
    },
    {
      text: 'Mitwirken',
      collapsed: true,
      items: [
        { text: 'Übersicht', link: '/contributing' },
        { text: 'Kompilieren', link: '/contributing/compiling' },
        { text: 'Code regeln', link: '/contributing/code-rules' }
      ]
    }
  ]
}

function searchOptionsDeAT(): Partial<DefaultTheme.LocalSearchOptions> {
  return {
    translations: {
      button: {
        buttonText: 'Suchen',
        buttonAriaLabel: 'Suchen'
      },
      modal: {
        displayDetails: 'Detaillierte list anzeigen',
        resetButtonTitle: 'Suche zurücksetzten',
        backButtonTitle: 'Suche schließen',
        noResultsText: 'Keine Ergebnisse gefunden für',
        footer: {
          selectText: 'zum auswählen',
          selectKeyAriaLabel: 'auswählen',
          navigateText: 'zum navigieren',
          navigateDownKeyAriaLabel: 'Pfeil-Runter-Knopf',
          navigateUpKeyAriaLabel: 'Pfeil-Hoch-Knopf',
          closeText: 'zum schließen',
          closeKeyAriaLabel: 'schließen'
        }
      }
    }
  }
}

export { configDeAT, searchOptionsDeAT }
