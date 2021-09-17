const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: '如常 朝午食',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tablogo.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '如常 朝午食',
        logo: {
          alt: '如常 朝午食',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '菜單',
          },
          // {to: '/blog', label: '最新消息', position: 'left'},
          {
            href: 'https://www.ubereats.com/tw/store/%E5%A6%82%E5%B8%B8%E6%9C%9D%E5%8D%88%E9%A3%9F/L6gNkVeARICJIJZJ0XJghQ',
            label: '| Uber Eats',
            position: 'right',
          },
          {
            href: 'https://www.facebook.com/lifeasusual',
            label: '| Facebook',
            position: 'right',
          },
          {
            href: 'https://www.instagram.com/life.asusual/',
            label: '| Instagram',
            position: 'right',
          },
          {
            href: 'https://lin.ee/6dQ1pak',
            label: '| Line',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        // links: [
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} 如常 朝午食`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
