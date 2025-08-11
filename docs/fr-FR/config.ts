import { type DefaultTheme } from 'vitepress'
import { LocaleConfig } from '../.vitepress/types'

const configFrFR: LocaleConfig = {
  label: 'Français',
  lang: 'fr-FR',
  title: 'SkEditor',
  description: 'Une application pour éditer des fichiers Skript',

  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/fr-FR' },
      { text: 'Documentation', link: '/fr-FR/first-steps/intro' }
    ],

    sidebar: {
      '/fr-FR/': { base: '/fr-FR/', items: sidebar() }
    },

    editLink: {
      pattern:
        'https://github.com/SkEditorTeam/SkEditorDocs/edit/main/docs/:path',
      text: 'Modifier cette page sur GitHub'
    },

    ...translations()
  }
}

function translations() {
  return {
    notFound: {
      title: 'PAGE INTROUVABLE',
      quote: '',
      linkLabel: 'Aller à l’accueil',
      linkText: 'Aller à l’accueil'
    },

    sidebarMenuLabel: 'Menu',
    outline: {
      label: 'Sur cette page'
    },

    lastUpdated: {
      text: 'Dernière mise à jour'
    },
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },

    langMenuLabel: 'Changer de langue'
  }
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Premiers pas',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/first-steps/intro' },
        { text: 'Installation', link: '/first-steps/installation' }
      ]
    },
    {
      text: 'Utilisation',
      collapsed: false,
      items: [
        {
          text: 'Intégration FTP',
          link: '/usage/ftp-integration'
        },
        {
          text: 'Expériences',
          collapsed: true,
          link: '/usage/experiments',
          items: [
            {
              text: 'Complétion de code',
              link: '/usage/experiments/code-completion'
            },
            {
              text: 'Projets',
              link: '/usage/experiments/projects'
            },
            {
              text: 'Aperçu Hex',
              link: '/usage/experiments/hex-preview'
            }
          ]
        }
      ]
    },
    {
      text: 'Extensions',
      collapsed: false,
      items: [
        { text: 'Analyzer', link: '/addons/analyzer' },
        {
          text: 'Créer une extension',
          link: '/addons/creating-an-addon'
        }
      ]
    },
    {
      text: 'Avancé',
      collapsed: true,
      items: [
        { text: 'Compilation', link: '/advanced/compiling' },
        { text: 'Contribuer', link: '/advanced/contributing' }
      ]
    }
  ]
}

function searchOptionsFrFR(): Partial<DefaultTheme.LocalSearchOptions> {
  return {
    translations: {
      button: {
        buttonText: 'Rechercher',
        buttonAriaLabel: 'Rechercher'
      },
      modal: {
        displayDetails: 'Afficher la liste détaillée',
        resetButtonTitle: 'Effacer la recherche',
        backButtonTitle: 'Fermer la recherche',
        noResultsText: 'Aucun résultat',
        footer: {
          selectText: 'sélectionner',
          selectKeyAriaLabel: 'sélectionner',
          navigateText: 'naviguer',
          navigateDownKeyAriaLabel: 'Flèche bas',
          navigateUpKeyAriaLabel: 'Flèche haut',
          closeText: 'fermer',
          closeKeyAriaLabel: 'fermer'
        }
      }
    }
  }
}

export { configFrFR, searchOptionsFrFR }
