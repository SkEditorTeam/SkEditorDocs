import { type DefaultTheme } from 'vitepress'
import { LocaleConfig } from '../.vitepress/types'

const configPlPL: LocaleConfig = {
  label: 'Polski',
  lang: 'pl-PL',
  title: 'SkEditor',
  description: 'Apka do edycji plików Skript',

  themeConfig: {
    nav: [
      { text: 'Strona główna', link: '/pl-PL' },
      { text: 'Dokumentacja', link: '/pl-PL/first-steps/intro' }
    ],

    sidebar: {
      '/pl-PL/': { base: '/pl-PL/', items: sidebar() }
    },

    editLink: {
      pattern:
        'https://github.com/SkEditorTeam/SkEditorDocs/edit/main/docs/:path',
      text: 'Edytuj na GitHubie'
    },

    ...translations()
  }
}

function translations() {
  return {
    notFound: {
      title: 'STRONA NIE ISTNIEJE',
      quote: '',
      linkLabel: 'Wróć do strony głównej',
      linkText: 'Wróć do strony głównej',
    },

    sidebarMenuLabel: 'Menu',
    outline: {
      label: 'Na tej stronie'
    },

    lastUpdated: {
      text: 'Ostatnia aktualizacja',
    },
    docFooter: {
      prev: 'Poprzednia strona',
      next: 'Następna strona'
    },

    langMenuLabel: 'Zmień język',
  }
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Pierwsze kroki',
      collapsed: false,
      items: [
        { text: 'Wprowadzenie', link: '/first-steps/intro' },
        { text: 'Instalacja', link: '/first-steps/installation' }
      ]
    },
    {
      text: 'Korzystanie',
      collapsed: false,
      items: [
        {
          text: 'Integracja FTP',
          link: '/usage/ftp-integration'
        },
        {
          text: 'Eksperymenty',
          collapsed: true,
          link: '/usage/experiments',
          items: [
            {
              text: 'Uzupełnianie kodu',
              link: '/usage/experiments/code-completion'
            },
            {
              text: 'Projekty',
              link: '/usage/experiments/projects'
            },
            {
              text: 'Podgląd Hex',
              link: '/usage/experiments/hex-preview'
            }
          ]
        }
      ]
    },
    {
      text: 'Dodatki',
      collapsed: false,
      items: [
        { text: 'Analyzer', link: '/addons/analyzer' },
        {
          text: 'Tworzenie dodatku',
          link: '/addons/creating-an-addon'
        }
      ]
    },
    {
      text: 'Zaawansowane',
      collapsed: true,
      items: [
        { text: 'Kompilacja', link: '/advanced/compiling' },
        { text: 'Wkład', link: '/advanced/contributing' }
      ]
    }
  ]
}

function searchOptionsPlPL(): Partial<DefaultTheme.LocalSearchOptions> {
  return {
    translations: {
      button: {
        buttonText: 'Szukaj',
        buttonAriaLabel: 'Szukaj'
      },
      modal: {
        displayDetails: 'Wyświetl szczegółową listę',
        resetButtonTitle: 'Wyczyść wyszukiwanie',
        backButtonTitle: 'Zamknij wyszukiwanie',
        noResultsText: 'Brak wyników',
        footer: {
          selectText: 'wybierz',
          selectKeyAriaLabel: 'wybierz',
          navigateText: 'nawiguj',
          navigateDownKeyAriaLabel: 'Strzałka w dół',
          navigateUpKeyAriaLabel: 'Strzałka w górę',
          closeText: 'zamknij',
          closeKeyAriaLabel: 'zamknij'
        }
      }
    }
  }
}

export { configPlPL, searchOptionsPlPL }
