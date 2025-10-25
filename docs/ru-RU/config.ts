import { type DefaultTheme } from 'vitepress'
import { LocaleConfig } from '../.vitepress/types'

const configRuRU: LocaleConfig = {
  label: 'Русский',
  lang: 'ru-RU',
  title: 'SkEditor',
  description: 'Приложение для редактирования скриптов',

  themeConfig: {
    nav: [
      { text: 'Главная', link: '/ru-RU' },
      { text: 'Документация', link: '/ru-RU/first-steps/intro' }
    ],

    sidebar: {
      '/ru-RU/': { base: '/ru-RU/', items: sidebar() }
    },

    editLink: {
      pattern:
        'https://github.com/SkEditorTeam/SkEditorDocs/edit/main/docs/:path',
      text: 'Редактировать на Github'
    },

    ...translations()
  }
}

function translations() {
  return {
    notFound: {
      title: 'СТРАНИЦА НЕ НАЙДЕНА',
      quote: '',
      linkLabel: 'На главную',
      linkText: 'На главную'
    },

    sidebarMenuLabel: 'Меню',
    outline: {
      label: 'На этой странице'
    },

    lastUpdated: {
      text: 'Последнее обновление'
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    langMenuLabel: 'Изменить язык'
  }
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Первые шаги',
      collapsed: false,
      items: [
        { text: 'Введение', link: '/first-steps/intro' },
        { text: 'Установка', link: '/first-steps/installation' }
      ]
    },
    {
      text: 'Использование',
      collapsed: false,
      items: [
        {
          text: 'FTP интеграция',
          link: '/usage/ftp-integration'
        },
        {
          text: 'Эксперименты',
          collapsed: true,
          link: '/usage/experiments',
          items: [
            {
              text: 'Автодополнение кода',
              link: '/usage/experiments/code-completion'
            },
            {
              text: 'Проекты',
              link: '/usage/experiments/projects'
            },
            {
              text: 'Hex предпросмотр',
              link: '/usage/experiments/hex-preview'
            }
          ]
        }
      ]
    },
    {
      text: 'Дополнения',
      collapsed: false,
      items: [
        { text: 'Анализатор', link: '/addons/analyzer' },
        {
          text: 'Создание дополнения',
          link: '/addons/creating-an-addon'
        }
      ]
    },
    {
      text: 'Продвинутые темы',
      collapsed: true,
      items: [
        { text: 'Компиляция', link: '/advanced/compiling' },
        { text: 'Участие в разработке', link: '/advanced/contributing' }
      ]
    }
  ]
}

function searchOptionsRuRU(): Partial<DefaultTheme.LocalSearchOptions> {
  return {
    translations: {
      button: {
        buttonText: 'Поиск',
        buttonAriaLabel: 'Поиск'
      },
      modal: {
        displayDetails: 'Показать подробный список',
        resetButtonTitle: 'Сбросить поиск',
        backButtonTitle: 'Закрыть поиск',
        noResultsText: 'Результаты не найдены для',
        footer: {
          selectText: 'для выбора',
          selectKeyAriaLabel: 'выбрать',
          navigateText: 'для навигации',
          navigateDownKeyAriaLabel: 'стрелка вниз',
          navigateUpKeyAriaLabel: 'стрелка вверх',
          closeText: 'для закрытия',
          closeKeyAriaLabel: 'закрыть'
        }
      }
    }
  }
}

export { configRuRU, searchOptionsRuRU }