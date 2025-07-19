import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'en-us',
    title: "SkEditor",
    description: "An app for editing Skript files.",
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
            }
        ],

        socialLinks: [
            {icon: 'kofi', link: 'https://ko-fi.com/notro'},
            {icon: 'discord', link: 'https://skeditordc.notro.me'},
            {icon: 'github', link: 'https://github.com/SkEditorTeam/SkEditor'}
        ]
    }
})
