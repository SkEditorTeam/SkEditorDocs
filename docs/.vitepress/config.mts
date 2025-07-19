import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'en-us',
    title: "SkEditor",
    description: "An app for editing Skript files.",
    appearance: 'force-dark',
    head: [['link', { rel: 'icon', href: '/assets/SkEditor.svg' }]],
    themeConfig: {
        logo: '/assets/SkEditor.svg',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Documentation', link: '/intro'}
        ],

        sidebar: [
            {
                text: 'First steps',
                items: [
                    {text: 'Introduction', link: '/intro'},
                    {text: 'Installation', link: '/installation'},
                ]
            },
            {
                text: 'Advanced',
                items: [
                    {text: 'Compiling', link: '/compiling'},
                    {text: 'Contributing', link: '/contributing'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'kofi', link: 'https://ko-fi.com/notro'},
            {icon: 'discord', link: 'https://skeditordc.notro.me'},
            {icon: 'github', link: 'https://github.com/SkEditorTeam/SkEditor'}
        ]
    }
})
