import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "LegoCity Docs",
  description: "Smart City Builder platform for modern, map-based urban dashboards",
  
  // Base URL for GitHub Pages deployment
  base: '/Lego-Doc/',
  
  // Clean URLs (remove .html extension)
  cleanUrls: true,
  
  // Ignore dead links during build (set to false to check links)
  ignoreDeadLinks: true,
  
    // Locales for multi-language support
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      themeConfig: {
        nav: [
          { text: 'Trang chủ', link: '/vi/' },
          { text: 'Bắt đầu', link: '/vi/getting-started/' },
          { text: 'Hướng dẫn', link: '/vi/user-guide/' }
        ],
        sidebar: {
          '/vi/': [
            {
              text: 'Bắt đầu',
              items: [
                { text: 'Tổng quan', link: '/vi/getting-started/' },
                { text: 'Kiến trúc', link: '/vi/getting-started/architecture' },
                { text: 'Khởi động nhanh', link: '/vi/getting-started/quickstart' }
              ]
            },
            {
              text: 'Cài đặt',
              items: [
                { text: 'Tổng quan', link: '/vi/installation/' },
                { text: 'Local', link: '/vi/installation/local' },
                { text: 'Docker', link: '/vi/installation/docker' },
                { text: 'Môi trường phát triển', link: '/vi/installation/development' }
              ]
            },
            {
              text: 'Hướng dẫn sử dụng',
              items: [
                { text: 'Tổng quan', link: '/vi/user-guide/' },
                { text: 'API Keys', link: '/vi/user-guide/api-keys' },
                { text: 'Data và Brokers', link: '/vi/user-guide/data-and-brokers' },
                { text: 'Entities', link: '/vi/user-guide/entities' },
                { text: 'Cập nhật máy chủ mẫu', link: '/vi/user-guide/sample-update-server' }
              ]
            },
            {
              text: 'Cấu hình',
              items: [
                { text: 'Tổng quan', link: '/vi/configuration/' },
                { text: 'API Keys', link: '/vi/configuration/api-keys' },
                { text: 'Data Sources', link: '/vi/configuration/data-sources' }
              ]
            },
            {
              text: 'Phát triển',
              items: [
                { text: 'Tổng quan', link: '/vi/development/' },
                { text: 'Blocks', link: '/vi/development/blocks' },
                { text: 'Plugins', link: '/vi/development/plugins' },
                { text: 'Seed Data', link: '/vi/development/seed-data' }
              ]
            },
            {
              text: 'AI',
              items: [
                { text: 'Tổng quan', link: '/vi/ai/overview' },
                { text: 'OpenRouter', link: '/vi/ai/openrouter' },
                { text: 'Providers', link: '/vi/ai/providers' },
                { text: 'Use Cases', link: '/vi/ai/use-cases' }
              ]
            },
            {
              text: 'Triển khai',
              items: [
                { text: 'Tổng quan', link: '/vi/deployment/' },
                { text: 'AWS', link: '/vi/deployment/aws' },
                { text: 'Cloudflare', link: '/vi/deployment/cloudflare' },
                { text: 'Coolify', link: '/vi/deployment/coolify' },
                { text: 'VM Docker', link: '/vi/deployment/vm-docker' },
                { text: 'Vận hành', link: '/vi/deployment/operations' }
              ]
            },
            {
              text: 'Tham khảo',
              items: [
                { text: 'Xử lý sự cố', link: '/vi/reference/troubleshooting' }
              ]
            }
          ]
        }
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'User Guide', link: '/user-guide/' },
      { text: 'Development', link: '/development/' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/getting-started/' },
            { text: 'Architecture', link: '/getting-started/architecture' },
            { text: 'Quick Start', link: '/getting-started/quickstart' }
          ]
        },
        {
          text: 'Installation',
          items: [
            { text: 'Overview', link: '/installation/' },
            { text: 'Local', link: '/installation/local' },
            { text: 'Docker', link: '/installation/docker' },
            { text: 'Development', link: '/installation/development' }
          ]
        },
        {
          text: 'User Guide',
          items: [
            { text: 'Overview', link: '/user-guide/' },
            { text: 'API Keys', link: '/user-guide/api-keys' },
            { text: 'Data and Brokers', link: '/user-guide/data-and-brokers' },
            { text: 'Entities', link: '/user-guide/entities' },
            { text: 'Sample Update Server', link: '/user-guide/sample-update-server' }
          ]
        },
        {
          text: 'Configuration',
          items: [
            { text: 'Overview', link: '/configuration/' },
            { text: 'API Keys', link: '/configuration/api-keys' },
            { text: 'Data Sources', link: '/configuration/data-sources' }
          ]
        },
        {
          text: 'Development',
          items: [
            { text: 'Overview', link: '/development/' },
            { text: 'Blocks', link: '/development/blocks' },
            { text: 'Plugins', link: '/development/plugins' },
            { text: 'Seed Data', link: '/development/seed-data' }
          ]
        },
        {
          text: 'AI Integration',
          items: [
            { text: 'Overview', link: '/ai/overview' },
            { text: 'OpenRouter', link: '/ai/openrouter' },
            { text: 'Providers', link: '/ai/providers' },
            { text: 'Use Cases', link: '/ai/use-cases' }
          ]
        },
        {
          text: 'Deployment',
          items: [
            { text: 'Overview', link: '/deployment/' },
            { text: 'AWS', link: '/deployment/aws' },
            { text: 'Cloudflare', link: '/deployment/cloudflare' },
            { text: 'Coolify', link: '/deployment/coolify' },
            { text: 'VM Docker', link: '/deployment/vm-docker' },
            { text: 'Operations', link: '/deployment/operations' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'Troubleshooting', link: '/reference/troubleshooting' },
            { text: 'Open Source Checklist', link: '/Open_Source_Checklist' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CTU-SematX/LegoCity' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/CTU-SematX/Lego-Doc/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the CC-BY-4.0 License.',
      copyright: 'Copyright © 2024-present CTU-SematX Team'
    }
  }
})
